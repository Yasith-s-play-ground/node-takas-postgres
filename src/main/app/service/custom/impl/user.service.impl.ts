import { UserTo } from "../../../to/user.to";
import {UserService} from "../user.service";

export class UserServiceImpl implements UserService {
    createUserAccount(user: UserTo): Promise<void> {
        throw new Error("Method not implemented.");
    }
    existsUserAccount(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getUserAccountDetails(email: string): Promise<UserTo> {
        throw new Error("Method not implemented.");
    }
    deleteUserAccount(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}