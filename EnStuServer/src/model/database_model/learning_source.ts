import { ParseObjectBase } from '../../parse';
import { User } from './user';

export class LearningSource extends ParseObjectBase {
    constructor(data?: {[key: string]: any}) {
        super(LearningSource.name, data);
    }

    get user(): any {
        return this.get('user');
    }

    set user(value: any) {
        this.set('user', value);
    }

    get source(): any {
        return this.get('source');
    }

    set source(value: any) {
        this.set('source', value);
    }

    get level(): any {
        return this.get('level');
    }

    set level(value: any) {
        this.set('level', value);
    }

    get topic(): any {
        return this.get('topic');
    }

    set topic(value: any) {
        this.set('topic', value);
    }
}