import { CloudFunctionBase } from '../parse/index';
import { RequestWord, RequestListTopic, ResponseListBase, Word, Topic, Level } from '../model/index';
import { ParseQueryBase } from '../parse';
import { getVoice } from '../text_to_speech/index';

export class WordCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addWord);
        this.defineCloud(this.selectWord);
    }

    async addWord(params: RequestWord, request: Parse.Cloud.FunctionRequest): Promise<Word> {
        var word = new Word();
        var topic = new Topic();
        topic.id = params.topicId + '';
        var level = new Level();
        level.id = params.levelId + '';
        word.text = params.text;
        word.textVi = params.textVi;
        word.topic = topic;
        word.level = level;
        try {
            var voice: any = await getVoice(params.text);
            var voiceEn = new Parse.File('voiceEn', Array.from(voice), 'audio/wav');
            var file = await voiceEn.save();
            word.voiceEn = file;
            return await word.saveAsync<Word>(null, { useMasterKey: true });
        } catch (err) {
            throw err;
        }
    }

    async selectWord(params: RequestWord, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<Word>>{
        let query = new ParseQueryBase(Word);
        return new ResponseListBase<Word>(1, 10, await query.findAsync<Word>({ useMasterKey: true }));
    }
}