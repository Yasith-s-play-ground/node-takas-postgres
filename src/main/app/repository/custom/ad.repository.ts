import {AdEntity} from "../../entity/ad.entity.js";
import {CrudRepository} from "../crud.repository.js";

export interface AdRepository extends CrudRepository<AdEntity, number> {

}