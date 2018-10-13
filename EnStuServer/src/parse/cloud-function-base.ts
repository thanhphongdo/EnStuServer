export interface LogsDataInterface { }

export interface CloudFunctionInterface<T>{
   call(params: any, request: Parse.Cloud.FunctionRequest):Parse.Promise<T>; 
}

export class CloudFunctionBase {
    static success(req: Parse.Cloud.FunctionRequest, res: Parse.Cloud.FunctionResponse, data: any, logsData: LogsDataInterface) {

    }

    static error(req: Parse.Cloud.FunctionRequest, res: Parse.Cloud.FunctionResponse, data: any, logsData: LogsDataInterface) {

    }

    defineCloud(cloudFunction: {(params: any, request: Parse.Cloud.FunctionRequest):Parse.Promise<any>, name?: any}){
        Parse.Cloud.define(cloudFunction.name, function(req, res){
            cloudFunction(req.params, req).then(data=>{
                res.success(data);
            }).catch(err=>{
                res.error(err);
            })
        });
    }
}
