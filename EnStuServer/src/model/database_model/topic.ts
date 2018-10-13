import { ParseObjectBase } from '../../parse';

export class Topic extends ParseObjectBase {
    public static nameOfClass: string = 'Topic';
    constructor() {
        super(Topic.nameOfClass);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
}