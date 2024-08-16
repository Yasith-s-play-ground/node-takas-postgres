import express, {json, Request, Response} from "express";
import {UserTo} from "../to/user.to.js";
import {Validators} from "../middleware/validators.middleware.js";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";

@Middleware([json()])
@RestController('/users')
export class UserHttpController {

    @Middleware([Validators.validateUser])
    @PostMapping("/")
    async createNewUserAccount(req: Request,
                               res: Response) {
        const user: UserTo = req.body as UserTo;

    }

    /* use route parameters ( path variables )*/
    @DeleteMapping("/:user")
    async deleteUserAccount(req: Request, res: Response) {
        console.log('Delete user account');
    }

    @GetMapping("/:user")
    async getUserAccount(req: Request, res: Response) {
        console.log('Get user account information');
    }
}

/* to send data in json objects
* this controller needs to use json */
// router.use(json());
//
// router.get('/me', httpController.getUserAccount);
// router.post('/', Validators.validateUser, httpController.createNewUserAccount);
// router.delete('/me', httpController.deleteUserAccount);

