import { CloudFunctionBase } from '../parse/index';
import { RequestWord, RequestListTopic, ResponseListBase, Word, Topic, Level } from '../model/index';
import { ParseQueryBase } from '../parse';
import { Promise } from 'parse/node';
import { File } from 'parse/node';
import { getVoice } from '../text_to_speech/index';

export class WordCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addWord);
        this.defineCloud(this.selectWord);
    }

    addWord(params: RequestWord, request: Parse.Cloud.FunctionRequest): Parse.Promise<Word> {
        var word = new Word();
        var topic = new Topic();
        topic.id = params.topicId + '';
        var level = new Level();
        level.id = params.levelId + '';
        word.text = params.text;
        word.textVi = params.textVi;
        word.topic = topic;
        word.level = level;
        return Promise.when(word.save(null, { useMasterKey: true }).then((word) => {
            return getVoice(params.text).then((audio: any) => {
                // var voiceEn = new File('voiceEn', { base64: audio }, 'audio/wav');
                var voiceEn = new Parse.File('voiceEn', Array.from(audio), 'audio/wav');
                return voiceEn.save().then(file=>{
                    word.voiceEn = file;
                    return word.save(null, { useMasterKey: true }).then(word => {
                        return word;
                    }).catch(err => {
                        throw err;
                    });
                }).catch(err=>{
                    throw err;
                });
            }).catch(err => {
                throw err;
            });
        }).catch(err => {
            throw err;
        }));
        // return getVoice(params.text).then(audio=>{

        // })

    }

    selectWord(params: RequestWord, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<Word>>{
        let query = new ParseQueryBase(Word);
        return Promise.when(query.find<Word>({useMasterKey: true}).then(words=>{
            let response: ResponseListBase<Word> = new ResponseListBase<Word>(1, 1000, words);
            return response;
        }))
    }
}