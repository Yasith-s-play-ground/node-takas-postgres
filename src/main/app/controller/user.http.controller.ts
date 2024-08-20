import {json, Request, Response} from "express";
import {Validators} from "../middleware/validators.middleware.js";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";
import {FactoryService, ServiceType} from "../service/factory.service.js";
import {UserService} from "../service/custom/user.service.js";

@Middleware([json()])
@RestController('/users')
export class UserHttpController {

    @Middleware([Validators.validateUser])
    @PostMapping("/")
    async createNewUserAccount(req: Request,
                               res: Response) {
        const userService = FactoryService.getInstance().getService(ServiceType.USER) as UserService;
        try {
            await userService.createUserAccount(req.body);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }


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

