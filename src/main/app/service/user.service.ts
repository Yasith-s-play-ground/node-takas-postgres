import {UserTo} from "../to/user.to";

export interface UserService {
    /* use descriptive names for methods */

    /* use YAGNI here, define only what is necessary for the API layer */

    createUserAccount(user: UserTo): Promise<void>;

    existsUserAccount(email: string): Promise<boolean>;

    getUserAccountDetails(email: string): Promise<UserTo>;

    deleteUserAccount(email: string): Promise<void>;
}