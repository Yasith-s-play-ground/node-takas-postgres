import express, {json, Request, Response} from "express";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";

@Middleware([json()])
@RestController('/users/:user/ads') /* value of path variable can change */
export class AdvertisementHttpController {

    @GetMapping('/')
    async findAllAds(req: Request, res: Response) {
        console.log("Find all ads");
    }

    @PostMapping('/')
    async postAdvertisement(req: Request, res: Response) {
        console.log("Post ad");
    }

    @DeleteMapping('/:id')
    async deleteAdvertisement(req: Request, res: Response) {
        console.log("Delete ad");
    }
}

// router.get('/', httpController.getAllAdvertisements);
// router.post('/', httpController.postAdvertisement);
// router.delete('/:id', httpController.deleteAdvertisement); /* id = route parameter, path variable */

