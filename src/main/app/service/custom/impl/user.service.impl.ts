import {UserTo} from "../../../to/user.to";
import {UserService} from "../user.service";
import {pool} from "../../../config/database.config";
import {FactoryRepository, RepositoryType} from "../../../repository/factory.repository";
import {UserRepository} from "../../../repository/custom/user.repository";

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