import { Level, Topic } from '../models/index';

export interface GetLevelBySource {
    (sourceId: string): {
        [sourceId: string]: Array<Level>;
    };
}

export interface GetTopicBySource {
    (sourceId: string): Array<Topic>;
}