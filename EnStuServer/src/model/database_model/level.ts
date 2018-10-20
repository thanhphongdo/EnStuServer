import { ParseObjectBase } from '../../parse';

export class Level extends ParseObjectBase {
    constructor(data?: {[key: string]: any}) {
        super(Level.name, data);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
}