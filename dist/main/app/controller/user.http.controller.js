import express, { json } from "express";
import { Validators } from "../middleware/validators.middleware.js";
class UserHttpController {
    async createNewUserAccount(req, res) {
        const user = req.body;
    }
    async deleteUserAccount(req, res) {
        console.log('Delete user account');
    }
    async getUserAccount(req, res) {
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
export { router as UserHttpController };
//# sourceMappingURL=user.http.controller.js.map