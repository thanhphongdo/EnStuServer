import { CloudFunctionBase } from '../parse/index';
import { RequestWord, RequestListTopic, ResponseListBase, Word, Topic, Level } from '../model/index';
import { ParseQueryBase } from '../parse';
import { Promise } from 'parse/node';

export class WordCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addWord);
        // this.defineCloud(this.listTopic);
    }

    addWord(params: RequestWord, request: Parse.Cloud.FunctionRequest): Parse.Promise<Word> {
        var word = new Word();
        var topic = new Topic();
        topic.id = params.topicId + '';
        var level = new Level();
        level.id = params.levelId + '';
        word.text = params.text;
        word.topic = topic;
        word.level = level;
        return Promise.when(word.save(null, { useMasterKey: true }).then((word) => {
            return word;
        }).catch(err => {
            throw err;
        }));
    }

    // listTopic(params: RequestListTopic, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<Topic>> {
    //     let postQuery = new ParseQueryBase(Topic);
    //     params.perPage = params.perPage || 10;
    //     params.page = params.page || 1;
    //     postQuery.limit(params.perPage);
    //     postQuery.skip(params.perPage * (params.page - 1));
    //     return Promise.when(postQuery.find<Topic>({ useMasterKey: true }).then((topics) => {
    //         let response: ResponseListBase<Topic> = new ResponseListBase<Topic>(1, 10, topics);
    //         return response;
    //     }).catch(err => {
    //         throw err;
    //     }));
    // }
}