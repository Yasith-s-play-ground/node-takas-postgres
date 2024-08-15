export class ErrorTo {
    status;
    title;
    detail;
    instance;
    errors;
    type = 'about:blank';
    constructor(status, title, detail, instance, errors) {
        this.status = status;
        this.title = title;
        this.detail = detail;
        this.instance = instance;
        this.errors = errors;
    }
}
//# sourceMappingURL=error.to.js.map