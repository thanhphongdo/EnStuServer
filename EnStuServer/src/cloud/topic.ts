import { CloudFunctionBase } from '../parse/index';
import { RequestTopic, RequestListTopic, ResponseListBase, Topic } from '../model/index';
import { ParseQueryBase } from '../parse';
import { Promise } from 'parse/node';

export class TopicCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addTopic);
        this.defineCloud(this.listTopic);
    }

    addTopic(params: RequestTopic, request: Parse.Cloud.FunctionRequest): Parse.Promise<Topic> {
        var topic = new Topic();
        topic.name = params.name;
        return Promise.when(topic.save(null, { useMasterKey: true }).then((topic: any) => {
            return topic;
        }).catch(err => {
            throw err;
        }));
    }

    listTopic(params: RequestListTopic, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<Topic>> {
        let postQuery = new ParseQueryBase(Topic);
        params.perPage = params.perPage || 10;
        params.page = params.page || 1;
        postQuery.limit(params.perPage);
        postQuery.skip(params.perPage * (params.page - 1));
        postQuery.include('source');
        return Promise.when(postQuery.find<Topic>({ useMasterKey: true }).then((topics) => {
            let response: ResponseListBase<Topic> = new ResponseListBase<Topic>(1, 10, topics);
            return response;
        }).catch(err => {
            throw err;
        }));
    }
}