import { ParseObjectBase } from '../../parse';

export class Topic extends ParseObjectBase {
    constructor(data?: {[key: string]: any}) {
        super(Topic.name, data);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
}