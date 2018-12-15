import { CloudFunctionBase } from '../parse/index';
import { RequestLearningSource, RequestListTopic, ResponseListBase, LearningSource, Source, Topic, Level, User } from '../model/index';
import { ParseQueryBase } from '../parse';

export class LearningSourceCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.learningSource);
    }
    

    async learningSource(params: RequestLearningSource, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<LearningSource>> {
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
        var data = await query.findAsync<LearningSource>({ useMasterKey: true });
        if (data && data.length) {
            await Parse.Object.destroyAll(data);
        }
        var response = await Parse.Object.saveAll(learningSources, { useMasterKey: true });
        return Promise.resolve(new ResponseListBase<LearningSource>(1, response.length, response));
    }
}