var fs = require('fs');
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

var textToSpeech = new TextToSpeechV1({
    username: '06834294-a9ce-4726-ab7d-8c47dadf65bf',
    password: 'xcoIzZfsAHGX',
    url: 'https://stream.watsonplatform.net/text-to-speech/api'
});

var synthesizeParams = {
    text: '',
    accept: 'audio/wav',
    encoding: 'base64',
    voice: 'en-US_AllisonVoice'
};

// Pipe the synthesized text to a file.



function getVoice(text: string){
    synthesizeParams.text = text;
    return new Promise((resolve, reject)=>{
        textToSpeech.synthesize(synthesizeParams, function (err: any, audio: any) {
            if (err) {
                reject(err);
            }
            var audio2 = audio;
            textToSpeech.repairWavHeader(audio);
            // fs.writeFile('audio.wav', audio, function(audio: any, err: any){
            //     // resolve(audio);
            // });
            // resolve('data:audio/wav;base64,' + audio.toString('base64'));
            resolve(audio);
        });
    })
}

export {
    getVoice
};