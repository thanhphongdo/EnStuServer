import { ParseObjectBase } from '../../parse';

export class Level extends ParseObjectBase {
    public static nameOfClass: string = 'Level';
    constructor() {
        super(Level.nameOfClass);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
}