import {UserTo} from "../../to/user.to.js";

export interface UserService {
    /* use descriptive names for methods */
    /* even if similar names are in methods of different interfaces in service layer,
    * we don't take them to a generic interface as it will remove the descriptive aspect
    * of the service layer*/

    /* use YAGNI here, define only what is necessary for the API layer */

    createUserAccount(user: UserTo): Promise<void>;

    existsUserAccount(email: string): Promise<boolean>;

    getUserAccountDetails(email: string): Promise<UserTo>;

    deleteUserAccount(email: string): Promise<void>;
}