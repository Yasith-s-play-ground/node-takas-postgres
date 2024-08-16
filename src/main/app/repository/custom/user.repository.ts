/*A Repository class is essentially a bridge between your application
logic and the underlying data storage (database, file system, etc.). It provides
a clean, abstracted interface for interacting with user data. By encapsulating
data access logic, it promotes code reusability, testability, and maintainability.*/
import {UserEntity} from "../../entity/user.entity.js";
import {CrudRepository} from "../crud.repository.js";

/* extending from CRUD Repository super interface */
export interface UserRepository extends CrudRepository<UserEntity /* T should be this */, string /* PK is string */>{

}