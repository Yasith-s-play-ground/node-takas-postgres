import {UserRepository} from "./custom/user.repository.js";
import {UserRepositoryImpl} from "./custom/impl/user.repository.impl.js";
import {PoolClient} from "pg";
import {ImageRepository} from "./custom/image.repository.js";
import {ImageRepositoryImpl} from "./custom/impl/image.repository.impl.js";
import {AdRepository} from "./custom/ad.repository.js";
import {AdRepositoryImpl} from "./custom/impl/ad.repository.impl.js";

/* We are using Factory Method Design Pattern
* We are making static methods to return products*/
export class FactoryRepository {
    static getUserRepository(connection: PoolClient): UserRepository {
        return new UserRepositoryImpl(connection);
    }

    static getImageRepository(connection: PoolClient): ImageRepository {
        return new ImageRepositoryImpl(connection);
    }

    static getAdRepository(connection: PoolClient): AdRepository {
        return new AdRepositoryImpl(connection);
    }
}