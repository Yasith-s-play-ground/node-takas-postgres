import { UserTo } from "../to/user.to.js";
import { validate } from "class-validator";
import { ErrorTo } from "../to/error.to.js";
export class Validators {
    static async validateUser(req, res, next) {
        const user = new UserTo();
        Object.assign(user, req.body);
        const errors = await validate(user);
        /* following RFC 9457 standard */
        if (errors.length > 0) {
            res.status(400)
                .json(new ErrorTo(400, "Bad Request", "Data Validation Failed", req.baseUrl + req.url, errors));
        }
        else {
            // @ts-ignore
            next();
        }
    }
}
//# sourceMappingURL=validators.middleware.js.map