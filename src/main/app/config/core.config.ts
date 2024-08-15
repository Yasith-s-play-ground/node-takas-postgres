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
    handlers?: Handlers,
    constructor: Function
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
        CONTROLLERS[constructor.name].constructor = constructor;
    }
}

export function Middleware(middlewares: Array<Function>) {
    return function (target: Object | Function, name?: string, descriptor?: PropertyDescriptor) {
        /* identify whether this middleware is applied to a class or a method */
        if (!name && !descriptor) {
            //Class
            if (!CONTROLLERS[target.constructor.name]) CONTROLLERS[target.constructor.name] = {};
            CONTROLLERS[(target as Function).name].middlewares = middlewares;
        } else {
            //Method
            if (!CONTROLLERS[target.constructor.name].handlers) CONTROLLERS[target.constructor.name].handlers = {};
            CONTROLLERS[target.constructor.name].handlers![name!].middlewares = middlewares;
        }
    }

}

export function GetMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        /* if this controller is not available in CONTROLLERS create new object */
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        /* if there is no handler object in the controller, put empty handler object */
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {};
        /* put createUserAccount object into this object if it is not added already */
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'GET'
        }
    }

}

export function PostMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'POST'
        }
    }

}

export function PutMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'PUT'
        }
    }

}

export function DeleteMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {};
        CONTROLLERS[prototype.constructor.name].handlers![name] = {
            path,
            method: 'DELETE'
        }
    }

}

export function PatchMapping(path: string = "/") {
    return function (prototype: Object, name: string, descriptor: PropertyDescriptor) {
        if (!CONTROLLERS[prototype.constructor.name]) CONTROLLERS[prototype.constructor.name] = {};
        if (!CONTROLLERS[prototype.constructor.name].handlers) CONTROLLERS[prototype.constructor.name].handlers = {};
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