import { CloudFunctionBase } from '../parse/index';
import { RequestTopic, RequestListTopic, ResponseListBase, Topic } from '../model/index';
import { ParseQueryBase } from '../parse';
// import { Promise } from 'parse/node';

export class TopicCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addTopic);
        this.defineCloud(this.listTopic);
    }

    async addTopic(params: RequestTopic, request: Parse.Cloud.FunctionRequest): Promise<Topic> {
        var topic = new Topic();
        topic.name = params.name;
        return await topic.saveAsync<Topic>(null, { useMasterKey: true });
    }

    async listTopic(params: RequestListTopic, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<Topic>> {
        let postQuery = new ParseQueryBase(Topic);
        params.perPage = params.perPage || 10;
        params.page = params.page || 1;
        postQuery.limit(params.perPage);
        postQuery.skip(params.perPage * (params.page - 1));
        postQuery.include('source');
        return new ResponseListBase<Topic>(1, 10, await postQuery.findAsync<Topic>({ useMasterKey: true }));
    }
}