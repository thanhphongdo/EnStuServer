import { ParseObjectBase } from '../../parse';

export class Topic extends ParseObjectBase {
    constructor() {
        super(Topic.name);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
}