import express from "express";
class AdvertisementHttpController {
    async getAllAdvertisements(req, res) {
        console.log("Get all advertisements");
    }
    async postAdvertisement(req, res) {
        console.log("Post advertisement");
    }
    async deleteAdvertisement(req, res) {
        console.log("Delete advertisement");
    }
}
export const router = express.Router();
const httpController = new AdvertisementHttpController();
router.get('/', httpController.getAllAdvertisements);
router.post('/', httpController.postAdvertisement);
router.delete('/:id', httpController.deleteAdvertisement); /* id = route parameter, path variable */
export { router as AdvertisementHttpController };
//# sourceMappingURL=advertisement.http.controller.js.map