import {ImageEntity} from "../entity/image.entity.js";

export interface ImageRepository {
    count(): number;

    saveUser(image: ImageEntity): number;

    update(image: ImageEntity): void;

    deleteById(imageId: number): void;

    findById(imageId: number): ImageEntity;

    findAll(): Array<ImageEntity>;

    existsById(imageId: number): boolean;
}