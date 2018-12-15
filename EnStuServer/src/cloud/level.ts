import { CloudFunctionBase } from '../parse/index';
import { RequestLevel, RequestListLevel, ResponseListBase, Level } from '../model/index';
import { ParseQueryBase } from '../parse';

export class LevelCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.listLevel);
    }

    async listLevel(params: RequestListLevel, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<Level>> {
        let postQuery = new ParseQueryBase(Level);
        params.perPage = params.perPage || 10;
        params.page = params.page || 1;
        postQuery.limit(params.perPage);
        postQuery.skip(params.perPage * (params.page - 1));
        return new ResponseListBase<Level>(1, 10, await postQuery.findAsync<Level>({ useMasterKey: true }));
    }
}