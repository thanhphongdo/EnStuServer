import { ParseObjectBase } from '../../parse';
import { User } from './user';

export class LearningWord extends ParseObjectBase {
    constructor(data?: {[key: string]: any}) {
        super(LearningWord.name, data);
    }

    get user(): any {
        return this.get('user');
    }

    set user(value: any) {
        this.set('user', value);
    }

    get word(): any {
        return this.get('word');
    }

    set word(value: any) {
        this.set('word', value);
    }
}