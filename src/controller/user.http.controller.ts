import express, {json, Request, Response} from "express";
import {pool} from "../database/pool.database.js";
import {UserTo} from "../to/user.to";
import {UserValidation} from "../validation/UserValidation.js";
import {PoolClient} from "pg";

export const controller = express.Router();

/* to send data in json objects
* this controller needs to use json */
controller.use(json());

controller.get('/me', getUserAccount);
controller.post('/', createNewUserAccount);
controller.delete('/me', deleteUserAccount);


async function createNewUserAccount(req: Request,
                                    res: Response) {
    const user: UserTo = req.body as UserTo;
    // Data Validation
    let violations = [];
    let validated: boolean = true;
    if (!UserValidation.validateEmail(user.email)) {
        validated = false;
        violations.push('Invalid email');
    }
    if (!UserValidation.validateName(user.name)) {
        validated = false;
        violations.push('Invalid name');
    }
    if (!UserValidation.validateContact(user.contact)) {
        validated = false;
        violations.push('Invalid contact');
    }

    if (!validated) {
        res.status(400).json({error: violations.toString()});
        console.log(violations.toString());
    } else {
        const connection = await pool.connect();
        let violations = [];
        let validated: boolean = true;
        // Business Validation
        // 1. Find whether this email already exists
        const emailResult = await connection.query('SELECT email FROM "user" WHERE email=$1'
            , [user.email]);
        if (emailResult.rowCount ?? 0 >= 1) {
            validated = false;
            violations.push('email already exists!');
        }
        // 2. Find whether this contact number is already associated with another user
        const contactResult = await connection.query('SELECT email FROM "user" WHERE contact=$1'
            , [user.contact]);
        if (contactResult.rowCount ?? 0 >= 1) {
            validated = false;
            violations.push('contact already associated with another user!');
        }
        if (!validated) {
            // If failed 409 status code ( conflict )
            res.status(409).json({error: violations.toString()});
            console.log(violations.toString());
        } else {
            try {
                await connection.query('INSERT INTO "user" (email,name,contact) VALUES ($1,$2,$3)',
                    [user.email, user.name, user.contact]);

                res.sendStatus(201);
            } catch (e) {
                console.log(e);
                res.status(500).json({error: e.toString()}); /* Internal server error - can't save */
            } finally {
                connection.release();
            }
        }
    }
}

function deleteUserAccount(req: Request, res: Response) {
    console.log('Delete user account');
}

function getUserAccount(req: Request, res: Response) {
    console.log('Get user account information');
}

// async function checkEmailExists(email: string, connection: PoolClient): boolean {
//     try {
//         const [result] = await connection.query('SELECT * FROM "user" WHERE email=$1'
//             , [email]);
//         return (result.rowCount ?? 0 >= 1);
//     } catch (e) {
//         console.log(e);
//     }
// }