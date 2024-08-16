import {ImageEntity} from "../../../entity/image.entity.js";
import {ImageRepository} from "../image.repository.js";
import {PoolClient} from "pg";

export class ImageRepositoryImpl implements ImageRepository {
    constructor(private connection: PoolClient) {

    }

    async count(): Promise<number> {
        const {rowCount} = await this.connection.query('SELECT * FROM image');
        return rowCount!;
    }

    async save(image: ImageEntity): Promise<number> {
        const {rows} = await this.connection.query('INSERT INTO image (ad_id,url) VALUES ($1,$2)',
            [image.adId, image.url]); /* image id is auto generated */
        image = rows[0]; /* need to get id from database as it is auto generated */
        return image.imageId;
    }

    async update(image: ImageEntity): Promise<void> {
        await this.connection.query('UPDATE image set ad_id=$1,url=$2 WHERE image_id=$3',
            [image.adId, image.url, image.imageId]);
    }

    async deleteById(imageId: number): Promise<void> {
        await this.connection.query('DELETE from image WHERE image_id=$1',
            [imageId]);
    }

    async findById(imageId: number): Promise<ImageEntity> {
        const {rows: [image]} = await this.connection.query('SELECT * from image WHERE image_id=$1',
            [imageId]);
        return image;
    }

    async findAll(): Promise<ImageEntity[]> {
        const {rows} = await this.connection.query('SELECT * from image');
        return rows;
    }

    async existsById(imageId: number): Promise<boolean> {
        return (!!(await this.findById(imageId)));
    }

}