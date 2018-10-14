import { ParseObjectBase } from '../../parse';

export class Level extends ParseObjectBase {
    constructor() {
        super(Level.name);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
}