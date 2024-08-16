import {UserServiceImpl} from "./custom/impl/user.service.impl";
import {AdServiceImpl} from "./custom/impl/ad.service.impl";

export enum ServiceType {
    USER, AD
}

export class FactoryService {
    private static readonly INSTANCE = new FactoryService();

    private constructor() {
    }

    getInstance(): FactoryService {
        return FactoryService.INSTANCE;
    }

    getService(type: ServiceType) {
        switch (type) {
            case ServiceType.USER:
                return new UserServiceImpl();
            case ServiceType.AD:
                return new AdServiceImpl();
        }
    }
}