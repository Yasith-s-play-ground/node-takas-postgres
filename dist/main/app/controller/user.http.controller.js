var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { json } from "express";
import { Validators } from "../middleware/validators.middleware.js";
import { DeleteMapping, GetMapping, Middleware, PostMapping, RestController } from "../config/core.config.js";
import { FactoryService, ServiceType } from "../service/factory.service.js";
let UserHttpController = class UserHttpController {
    async createNewUserAccount(req, res) {
        const userService = FactoryService.getInstance().getService(ServiceType.USER);
        try {
            await userService.createUserAccount(req.body);
        }
        catch (e) {
            console.log(e);
        }
    }
    /* use route parameters ( path variables )*/
    async deleteUserAccount(req, res) {
        console.log('Delete user account');
    }
    async getUserAccount(req, res) {
        console.log('Get user account information');
    }
};
__decorate([
    Middleware([Validators.validateUser]),
    PostMapping("/")
], UserHttpController.prototype, "createNewUserAccount", null);
__decorate([
    DeleteMapping("/:user")
], UserHttpController.prototype, "deleteUserAccount", null);
__decorate([
    GetMapping("/:user")
], UserHttpController.prototype, "getUserAccount", null);
UserHttpController = __decorate([
    Middleware([json()]),
    RestController('/users')
], UserHttpController);
export { UserHttpController };
/* to send data in json objects
* this controller needs to use json */
// router.use(json());
//
// router.get('/me', httpController.getUserAccount);
// router.post('/', Validators.validateUser, httpController.createNewUserAccount);
// router.delete('/me', httpController.deleteUserAccount);
//# sourceMappingURL=user.http.controller.js.map