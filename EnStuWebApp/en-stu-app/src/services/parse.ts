var Parse = require('parse/dist/parse.min.js');
import { JsonObject, JsonProperty, JsonCustomConvert, JsonConvert, JsonConverter, OperationMode, ValueCheckingMode } from "json2typescript";
import Vue from 'vue';

function init() {
    Parse.initialize(process.env.VUE_APP_PARSE_ID);
    Parse.serverURL = process.env.VUE_APP_PARSE_SERVER_URL;
    return Parse;
}

function test() {
    Vue.prototype.Parse.Cloud.run('test').then((data: any) => {
        console.log(data);
    })
    console.log(Vue.prototype.Parse);
}

function cloud(name: string, params?: { [key: string]: any }): Promise<any> {
    return new Promise((resolve, reject) => {
        Vue.prototype.Parse.Cloud.run(name, params).then((data: any) => {
            resolve(data);
        }).catch((err: any) => {
            reject()
        });
    });
}

function deserialize<T>(className: any, json: any): T {
    let jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.operationMode = OperationMode.ENABLE; // print some debug data
    jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
    return jsonConvert.deserialize(json, className);
}

function deserializeArray<T>(className: any, jsons: Array<any>): Array<T> {
    let jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.operationMode = OperationMode.ENABLE; // print some debug data
    jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
    var data = [];
    for (var i = 0; i < jsons.length; i++) {
        data.push(jsonConvert.deserialize(jsons[i], className))
    }
    return data;
}

function toJSON(data: any){
    return JSON.parse(JSON.stringify(data));
}

export {
    init,
    cloud,
    deserialize,
    deserializeArray,
    toJSON
}