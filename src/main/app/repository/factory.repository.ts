import {UserRepository} from "./custom/user.repository.js";
import {UserRepositoryImpl} from "./custom/impl/user.repository.impl.js";
import {PoolClient} from "pg";
import {ImageRepository} from "./custom/image.repository.js";
import {ImageRepositoryImpl} from "./custom/impl/image.repository.impl.js";
import {AdRepository} from "./custom/ad.repository.js";
import {AdRepositoryImpl} from "./custom/impl/ad.repository.impl.js";
import {SuperRepository} from "./super.repository";
import {QueryRepositoryImpl} from "./custom/impl/query.repository.impl";

export enum RepositoryType {
    AD, USER, IMAGE, QUERY
}

/* We are using Factory Design Pattern
* We are making instance methods to return products*/
export class FactoryRepository {
    private static readonly INSTANCE = new FactoryRepository();

    private constructor() {
    }

    static getInstance(): FactoryRepository {
        return FactoryRepository.INSTANCE;
    }

    /* We need generic only for this method
    * Not for the whole class */
    getRepository(type: RepositoryType, connection: PoolClient): SuperRepository | null {
        switch (type) {
            case RepositoryType.USER:
                return new UserRepositoryImpl(connection);
            case RepositoryType.IMAGE:
                return new ImageRepositoryImpl(connection);
            case RepositoryType.AD:
                return new AdRepositoryImpl(connection);
            case RepositoryType.QUERY:
                return new QueryRepositoryImpl(connection);
        }
    }

    // getUserRepository(connection: PoolClient): UserRepository {
    //     return new UserRepositoryImpl(connection);
    // }
    //
    // getImageRepository(connection: PoolClient): ImageRepository {
    //     return new ImageRepositoryImpl(connection);
    // }
    //
    // getAdRepository(connection: PoolClient): AdRepository {
    //     return new AdRepositoryImpl(connection);
    // }

}