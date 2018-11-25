import { LearningSource } from '../index';

export class RequestLearningSource {

    constructor(){
        this._sourceId = '';
        this._topicIds = [];
        this._levelId = '';
    }

    _sourceId: string;
    _topicIds: Array<string>;
    _levelId: string;

    get sourceId(): string {
        return this._sourceId;
    }

    set sourceId(value: string) {
        this._sourceId = value;
    }

    get topicIds(): Array<string> {
        return this._topicIds;
    }

    set topicIds(value: Array<string>) {
        this._topicIds = value;
    }

    get levelId(): string {
        return this._levelId;
    }

    set levelId(value: string) {
        this._levelId = value;
    }
}