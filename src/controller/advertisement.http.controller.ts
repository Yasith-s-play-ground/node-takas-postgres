import express, {Request, Response} from "express";


export const controller = express.Router();

controller.get('/', getAllAdvertisements);
controller.post('/', postAdvertisement);
controller.delete('/:id', deleteAdvertisement); /* id = route parameter, path variable */

function getAllAdvertisements(req: Request, res: Response) {
    console.log("Get all advertisements");
}

function postAdvertisement(req: Request, res: Response) {
    console.log("Post advertisement");
}

function deleteAdvertisement(req: Request, res: Response) {
    console.log("Delete advertisement");
}

