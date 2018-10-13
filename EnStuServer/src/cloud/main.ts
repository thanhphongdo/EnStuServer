import { User, Post } from "../model/index";

import { PostCloud } from './post';

const postCloud = new PostCloud();

// Parse.Cloud.define('hello', function (req, res) {
//     var user = new User();
//     user.firstName = 'Phong';
//     user.lastName = 'Do';
//     user.setUsername('phongdo444');
//     user.email = 'phong444@gmail.com';
//     user.setPassword('11111111');
//     user.save(null).then(user => {
//         var post = new Post();
//         post.user = user;
//         post.message = 'message';
//         post.save(null).then(post => {
//             res.success(post);
//         }).catch(err => {
//             res.error(err);
//         })
//     }).catch(err => {
//         console.log(err);
//         res.error(err);
//     })
// });
