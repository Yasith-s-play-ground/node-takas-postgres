import {Module} from "./config/core.config";
import {UserHttpController} from "./controller/user.http.controller";
import {AdvertisementHttpController} from "./controller/advertisement.http.controller";

@Module([UserHttpController, AdvertisementHttpController])
export class AppModule {

}