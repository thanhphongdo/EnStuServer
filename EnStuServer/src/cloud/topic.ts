import { CloudFunctionBase } from '../parse/index';
import { RequestTopic, ResponseListBase, Topic } from '../model/index';
import { ParseQueryBase } from '../parse';
// import {Parse} from 'parse/pro';
// import { Promise } from 'parse/node';
import * as Parse from 'parse/node';

export class TopicCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addTopic);
    }

    addTopic(params: RequestTopic, request: Parse.Cloud.FunctionRequest): Parse.Promise<Topic> {
        var topic = new Topic();
        topic.name = params.name;
        return Parse.Promise.when(topic.save(null, { }).then((topic: any) => {
            return topic;
        }).catch(err => {
            throw err;
        }));
    }

    // getListPost(params: RequestListPost, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<Post>> {
    //     let postQuery = new ParseQuery(Post.nameOfClass, Post);
    //     return Parse.Promise.when(postQuery.get<Post>('EFzFL59CcF', { useMasterKey: true }).then((post) => {
    //         let response: ResponseListBase<Post> = new ResponseListBase<Post>(1, 10, [post]);
    //         return response;
    //     }).catch(err => {
    //         return err;
    //     }));
    // }
}