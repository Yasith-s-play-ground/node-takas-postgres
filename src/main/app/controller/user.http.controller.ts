import express, {json, NextFunction, Request, RequestHandler, Response} from "express";
import {UserTo} from "../to/user.to.js";
import {Validators} from "../middleware/validators.middleware.js";

class UserHttpController {
    async createNewUserAccount(req: Request,
                               res: Response) {
        const user: UserTo = req.body as UserTo;

    }

    async deleteUserAccount(req: Request, res: Response) {
        console.log('Delete user account');
    }

    async getUserAccount(req: Request, res: Response) {
        console.log('Get user account information');
    }
}

const router = express.Router();
const httpController = new UserHttpController();
/* to send data in json objects
* this controller needs to use json */
router.use(json());

router.get('/me', httpController.getUserAccount);
router.post('/', Validators.validateUser, httpController.createNewUserAccount);
router.delete('/me', httpController.deleteUserAccount);

export {router as UserHttpController};