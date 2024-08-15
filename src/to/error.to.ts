export class ErrorTo {
    type: string = 'about:blank';

    constructor(public status: number,
                public title: string,
                public detail: string,
                public instance: string,
                public errors: any) {

    }

}