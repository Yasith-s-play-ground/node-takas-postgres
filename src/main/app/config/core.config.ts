import express from "express";

type Handler = {
    path?: string,
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE',
    middlewares?: Array<Function>
}

type Handlers = {
    [handler: string]: Handler
}

type Controller = {
    path?: string,
    middlewares?: Array<Function>,
    handlers?: Handlers
}

type Controllers = {
    [controller: string]: Controller
}

const CONTROLLERS: Controllers = {};

export function Module(controllers: Array<Function>) {
    return function (constructor: Function) {
    }
}

export function RestController(path: string = "/") {
    return function (constructor: Function) {
        CONTROLLERS[constructor.name].path = path;
    }
}

export function Middleware(middlewares: Array<Function>) {
    return function (target: Object | Function, name?: string, descriptor?: PropertyDescriptor) {
    }

}

export function GetMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {
            handlers: {}
        };
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'GET'
        }
    }

}

export function PostMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {
            handlers: {}
        };
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'POST'
        }
    }

}

export function PutMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {
            handlers: {}
        };
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'PUT'
        }
    }

}

export function DeleteMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {
            handlers: {}
        };
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'DELETE'
        }
    }

}

export function PatchMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {
            handlers: {}
        };
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'PATCH'
        }
    }

}

export class ExpressApp {
    static create(module: Function) {
        const app = express();
        console.log(CONTROLLERS);
        return app;
    }
}