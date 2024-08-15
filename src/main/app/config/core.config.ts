export function RestController(path: string = "/") {
    return function (constructor: Function) {
    };
}

export function Middleware([]: Array<Function>) {
    return function (target: Object | Function, name?: string, descriptor?: PropertyDescriptor) {
    };

}

export function GetMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    };

}

export function PostMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    };

}

export function PutMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    };

}

export function DeleteMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    };

}

export function PatchMapping(path: string = "/") {
    return function (target: Object, name: string, descriptor: PropertyDescriptor) {
    };

}