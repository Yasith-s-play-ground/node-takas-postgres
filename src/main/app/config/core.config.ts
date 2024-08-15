import express from "express";

export function Module(controllers: Array<Function>) {
    return function (constructor: Function) {
    }
}

export function RestController(path: string = "/") {
    return function (constructor: Function) {
        console.log('Rest Controller');
    }
}

export function Middleware(middlewares: Array<Function>) {
    return function (target: Object | Function, name?: string, descriptor?: PropertyDescriptor) {
    }

}

export function GetMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    }

}

export function PostMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    }

}

export function PutMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    }

}

export function DeleteMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    }

}

export function PatchMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    }

}

export class ExpressApp {
    static create(module: Function) {
        const app = express();
        return app;
    }
}