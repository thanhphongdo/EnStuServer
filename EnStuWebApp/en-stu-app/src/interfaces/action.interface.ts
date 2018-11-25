import {Level, Topic} from '../models/index';

export interface SetLevelBySource{
    (sourceId: string):any;
}

export interface SetTopicBySource{
    (sourceId: string):any;
}