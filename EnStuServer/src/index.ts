import { Application } from 'express';
import express = require('express');
import request = require('request');
var fs = require('fs');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var path = require('path');
import { appConfig } from './config/index';
if (!appConfig.parseServer && appConfig.parseServer) {
    console.log('Config not found');
}
var api = new ParseServer({
    databaseURI: appConfig.parseServer.databaseURI,
    cloud: __dirname + appConfig.parseServer.cloud,
    appId: appConfig.parseServer.appId,
    masterKey: appConfig.parseServer.masterKey,
    serverURL: appConfig.parseServer.serverURL,
    liveQuery: appConfig.parseServer.liveQuery
});

// var typedoc = require('typedoc');
// import {Decorator} from 'typedoc';
// var appTD = new typedoc.Application();
// console.log(appTD);

var dashboard = new ParseDashboard({
    apps: [{
        serverURL: appConfig.parseServer.serverURL,
        appId: appConfig.parseServer.appId,
        masterKey: appConfig.parseServer.masterKey,
        appName: appConfig.parseServer.appName
    }],
    // users: [{
    //     user: 'root',
    //     pass: 'r00t'
    // }]
}, { allowInsecureHTTP: true });

var app: Application = express();

// Serve static assets from the /public folder
// app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = '/parse';
app.use(mountPath, api);

app.use('/-board', dashboard);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
    res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

// var textToSpeech = new TextToSpeechV1({
//     iam_apikey: 'NM15jgz4tGDsgZ3BNaHg0LLNLaklRmGEmDaT5dTvjB9I',
//     url: 'https://gateway-syd.watsonplatform.net/speech-to-text/api'
// });

// app.get('/testVoice', function (req, res) {
//     var textToSpeech = new TextToSpeechV1({
//         username: '06834294-a9ce-4726-ab7d-8c47dadf65bf',
//         password: 'xcoIzZfsAHGX',
//         url: 'https://stream.watsonplatform.net/text-to-speech/api'
//     });

//     var synthesizeParams = {
//         text: 'Hello world',
//         accept: 'audio/wav',
//         voice: 'en-US_AllisonVoice'
//     };

//     // Pipe the synthesized text to a file.
//     textToSpeech.synthesize(synthesizeParams, function (err: any, audio: any) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         textToSpeech.repairWavHeader(audio);
//         fs.writeFileSync('audio.wav', audio);
//         console.log('audio.wav written with a corrected wav header');
//     });

//     res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
// });

import {RequestWord} from './model/request_model/request_word';
app.get('/test', function (req, res) {
    // var RequestWord = require('./model/request_model/request_word').RequestWord;
    var params = new RequestWord();
    params.text = 'Hello';
    params.topicId = 'Uah8sQr1EM',
    params.levelId = 'wtKPHxHO4w';
    Parse.Cloud.run("addWord", params.toJSON()).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
    res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});


// There will be a test page available on the /test path of your server url
// Remove this before launching your app
// app.get('/test', function(req, res) {
//   res.sendFile(path.join(__dirname, '/public/test.html'));
// });

var httpServer = require('http').createServer(app);
httpServer.listen(appConfig.parseServer.port, function () {
    console.log('parse-server running on port ' + appConfig.parseServer.port + '.');
    console.log('MongoDB uri ' + appConfig.parseServer.databaseURI + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
