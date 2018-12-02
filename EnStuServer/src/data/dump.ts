import {Words} from './words';

export function addWord(){
    for(var i = 0; i< Words.length; i++){
        for(var j = 0; j< Words[i].words.length; j++){
            var params = {
                sourceId: Words[i].source,
                levelId: Words[i].level,
                topicId: Words[i].topic,
                text: Words[i].words[j][0],
                textVi: Words[i].words[j][1]
            }
            Parse.Cloud.run('addWord', params);
        }
    }
}