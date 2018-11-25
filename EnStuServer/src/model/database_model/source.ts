import { ParseObjectBase } from '../../parse';
import { User } from './user';


export class Source extends ParseObjectBase {
    constructor(data?: {[key: string]: any}) {
        super(Source.name, data);
    }

    get name(): string {
        return this.get('name');
    }

    set name(value: string) {
        this.set('name', value);
    }
    
}