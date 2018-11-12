import {Level} from '../models/index';

export interface GetLevelBySource{
    (sourceId: string):{
        [sourceId: string]: Array<Level>;
    };
}