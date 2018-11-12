import { CloudFunctionBase } from '../parse/index';
import { RequestLevel, RequestListLevel, ResponseListBase, Level } from '../model/index';
import { ParseQueryBase } from '../parse';
import { Promise } from 'parse/node';

export class LevelCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.listLevel);
    }

    listLevel(params: RequestListLevel, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<Level>> {
        let postQuery = new ParseQueryBase(Level);
        params.perPage = params.perPage || 10;
        params.page = params.page || 1;
        postQuery.limit(params.perPage);
        postQuery.skip(params.perPage * (params.page - 1));
        return Promise.when(postQuery.find<Level>({ useMasterKey: true }).then((levels) => {
            let response: ResponseListBase<Level> = new ResponseListBase<Level>(1, 10, levels);
            return response;
        }).catch(err => {
            throw err;
        }));
    }
}