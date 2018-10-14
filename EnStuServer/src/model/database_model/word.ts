import { ParseObjectBase } from '../../parse';
import { User } from './user';


export class Word extends ParseObjectBase {
    constructor() {
        super(Word.name);
    }

    get text(): string {
        return this.get('text');
    }

    set text(value: string) {
        this.set('text', value);
    }

    get topic(): any {
        return this.get('topic');
    }

    set topic(value: any) {
        this.set('topic', value);
    }

    get level(): any {
        return this.get('level');
    }

    set level(value: any) {
        this.set('level', value);
    }

    get isSentence(): boolean {
        return this.get('isSentence');
    }

    set isSentence(value: boolean) {
        this.set('isSentence', value);
    }
}