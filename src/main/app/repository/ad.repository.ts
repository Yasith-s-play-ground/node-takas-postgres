import {AdEntity} from "../entity/ad.entity.js";

export interface AdRepository {
    count(): number;

    saveUser(ad: AdEntity): number;

    update(ad: AdEntity): void;

    deleteById(adId: number): void;

    findById(adId: number): AdEntity;

    findAll(): Array<AdEntity>;

    existsById(adId: number): boolean;
}