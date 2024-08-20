import {UserTo} from "../../../to/user.to.js";
import {UserService} from "../user.service.js";
import {pool} from "../../../config/database.config.js";
import {FactoryRepository, RepositoryType} from "../../../repository/factory.repository.js";
import {UserRepository} from "../../../repository/custom/user.repository.js";

export class UserServiceImpl implements UserService {
    async createUserAccount(user: UserTo): Promise<void> {
        const connection = await pool.connect();

        //Business Validation
        const userRepo = FactoryRepository.getInstance().getRepository(RepositoryType.USER, connection) as UserRepository;

        if (await userRepo.existsById(user.email)) {
            throw new Error("User already exists");
        }

        if ((await userRepo.findAll()).find(u => u.contact === user.contact)) {
            throw new Error("Contact number already associated with another user");
        }

        await userRepo.save(user);

        connection.release();
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