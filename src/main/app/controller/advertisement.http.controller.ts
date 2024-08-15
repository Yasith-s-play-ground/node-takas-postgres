import express, {Request, Response} from "express";

class AdvertisementHttpController {
    async getAllAdvertisements(req: Request, res: Response) {
        console.log("Get all advertisements");
    }

    async postAdvertisement(req: Request, res: Response) {
        console.log("Post advertisement");
    }

    async deleteAdvertisement(req: Request, res: Response) {
        console.log("Delete advertisement");
    }
}

export const router = express.Router();
const httpController = new AdvertisementHttpController();

router.get('/', httpController.getAllAdvertisements);
router.post('/', httpController.postAdvertisement);
router.delete('/:id', httpController.deleteAdvertisement); /* id = route parameter, path variable */

export {router as AdvertisementHttpController};