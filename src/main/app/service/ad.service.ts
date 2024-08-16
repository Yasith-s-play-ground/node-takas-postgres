import {AdTo} from "../to/ad.to.js";

export interface AdService {
    getAllAds(): Promise<Array<AdTo>>;

    getAdsByUser(email: string): Promise<Array<AdTo>>;

    getAdById(adId: number): Promise<AdTo>;

    createNewAd(email: string, ad: AdTo): Promise<void>;

    deleteAd(email: string, adId: number): Promise<void>;
}