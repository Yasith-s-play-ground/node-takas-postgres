/*A Repository class is essentially a bridge between your application
logic and the underlying data storage (database, file system, etc.). It provides
a clean, abstracted interface for interacting with user data. By encapsulating
data access logic, it promotes code reusability, testability, and maintainability.*/
import {UserEntity} from "../entity/user.entity.js";

export interface UserRepository {
    count(): number;

    saveUser(user: UserEntity): string;

    update(user: UserEntity): void;

    deleteById(email: string): void;

    findById(email: string): UserEntity;

    findAll(): Array<UserEntity>;

    existsById(email: string): boolean;
}