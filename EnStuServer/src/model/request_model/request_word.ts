import { Word } from '../index';

export class RequestWord extends Word {
    constructor(){
        super();
    }
    get sourceId(): string {
        return this.get('sourceId');
    }

    set sourceId(value: string) {
        this.set('sourceId', value);
    }

    get topicId(): string {
        return this.get('topicId');
    }

    set topicId(value: string) {
        this.set('topicId', value);
    }

    get levelId(): string {
        return this.get('levelId');
    }

    set levelId(value: string) {
        this.set('levelId', value);
    }
    // get topicId: string;
    // public levelId: string;
}