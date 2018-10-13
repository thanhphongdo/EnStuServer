// import * as Parse from 'parse-server/node';
export interface LogsDataInterface { }

export interface CloudFunctionInterface<T> {
    call(params: any, request: Parse.Cloud.FunctionRequest): Parse.Promise<T>;
}

export class CloudFunctionBase {
    static success(data: any, logsData?: LogsDataInterface) {
        return data;
    }

    static error(data: any, logsData?: LogsDataInterface) {
        return data;
    }

    defineCloud(cloudFunction: { (params: any, request: Parse.Cloud.FunctionRequest): Parse.Promise<any>, name?: any }) {
        Parse.Cloud.define(cloudFunction.name, function (req: Parse.Cloud.FunctionRequest, res: any) {
            return cloudFunction(req.params, req).then(data => {
                return CloudFunctionBase.success(data);
            }).catch(err => {
                throw CloudFunctionBase.error(err);
            })
        });
    }
}
