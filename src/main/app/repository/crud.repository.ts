/* This is the super interface */
import {SuperRepository} from "./super.repository.js";

export interface CrudRepository<T, PK> extends SuperRepository/* This is how to define Type Parameters */
{
    /* As these functions should be implemented as async, return type should be wrapped with Promise */
    count(): Promise<number>;

    save(entity: T): Promise<PK>; /*
    We can use above defined Type Parameters in this context
    Take Type placeholders*/

    update(entity: T): Promise<void>;

    deleteById(id: PK): Promise<void>;

    findById(pk: PK): Promise<T>;

    findAll(): Promise<Array<T>>;

    existsById(pk: PK): Promise<boolean>;
}