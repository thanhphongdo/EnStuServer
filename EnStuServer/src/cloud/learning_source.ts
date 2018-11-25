import { CloudFunctionBase } from '../parse/index';
import { RequestLearningSource, RequestListTopic, ResponseListBase, LearningSource, Source, Topic, Level, User } from '../model/index';
import { ParseQueryBase } from '../parse';
import { Promise } from 'parse/node';
import { File } from 'parse/node';
import { getVoice } from '../text_to_speech/index';
import { Exception } from 'handlebars';

export class LearningSourceCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.learningSource);
        // this.defineCloud(this.listTopic);
    }

    learningSource(params: RequestLearningSource, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<LearningSource>> {
        if (!request.user) {
            throw LearningSourceCloud.unauthorized;
        }
        let learningSources: Array<LearningSource> = [];
        for (let i = 0; i < params.topicIds.length; i++) {
            let learningSource = new LearningSource();
            let topic = new Topic();
            topic.id = params.topicIds[i];
            let level = new Level();
            level.id = params.levelId + '';
            let source = new Source();
            source.id = params.sourceId;
            learningSource.source = source;
            learningSource.topic = topic;
            learningSource.level = level;
            learningSource.user = request.user;
            learningSources.push(learningSource);
        }

        let source = new Source();
        source.id = params.sourceId;
        let query = new ParseQueryBase(LearningSource);
        query.equalTo('source', source);
        query.equalTo('user', request.user);
        query.limit(1000);
        return Promise.when(query.find<LearningSource>({ useMasterKey: true }).then((data) => {
            return Parse.Object.destroyAll(data).then(data => {
                return Parse.Object.saveAll(learningSources, { useMasterKey: true }).then((LearningSources) => {
                    let response: ResponseListBase<LearningSource> = new ResponseListBase<LearningSource>(1, LearningSources.length, LearningSources);
                    return response;
                }).catch(err=>{
                    throw err;
                });
            }).catch(err => {
                throw err;
            });
        }).catch(err => {
            throw err;
        }));
    }
}