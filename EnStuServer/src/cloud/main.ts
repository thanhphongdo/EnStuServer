import { User, Post } from "../model/index";

import { PostCloud } from './post';
import { TopicCloud } from './topic';
import { WordCloud } from './word';

const postCloud = new PostCloud();
const topicCloud = new TopicCloud();
const wordCloud = new WordCloud();

Parse.Cloud.define('hello', function (req, res) {
    res.success({ test: true });
});

// Parse.Cloud.define("test", function (request, response) {
//     const query = new Parse.Query("Topic");
//     query.find()
//         .then((results) => {
//             return results;
//         })
//         .catch(() => {
//             return "movie lookup failed";
//         });
// });


Parse.Cloud.define("test", (request) => {
    const query = new Parse.Query('Topic');
    return query.find({useMasterKey:true})
    .then((results) => {
        return results;
    });
});