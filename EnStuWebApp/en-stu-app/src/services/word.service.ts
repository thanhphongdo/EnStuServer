import * as Parse from './parse';
import { Word } from '../models/index';

export function getTopicBySource(sourceId: string) {
    return Parse.cloud('selectWord', { perPage: 1000 }).then(res => {
        var data = Parse.deserializeArray<Word>(Word, Parse.toJSON(res.data));
        return Promise.resolve(data);
    }).catch(err => {
        return Promise.reject(err);
    });
}

export const WordService = {
    getTopicBySource
}
