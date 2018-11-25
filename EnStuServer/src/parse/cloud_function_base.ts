// import * as Parse from 'parse-server/node';
export interface LogsDataInterface { }

export interface CloudFunctionInterface<T> {
    call(params: any, request: Parse.Cloud.FunctionRequest): Parse.Promise<T>;
}

export class CloudFunctionBase {
    static unauthorized = {
        code: Parse.ErrorCode.INVALID_SESSION_TOKEN,
        message: 'unauthorized'
    }

    static success(data: any, logsData?: LogsDataInterface) {
        return data;
    }

    static error(data: any, logsData?: LogsDataInterface) {
        return new Parse.Error(data.code || Parse.ErrorCode.INTERNAL_SERVER_ERROR, data.message || 'internal server error');
    }

    defineCloud(cloudFunction: { (params: any, request: Parse.Cloud.FunctionRequest): Parse.Promise<any>, name?: any }) {
        Parse.Cloud.define(cloudFunction.name, function (req: Parse.Cloud.FunctionRequest, res: any) {
            try {
                return cloudFunction(req.params, req).then(data => {
                    return CloudFunctionBase.success(data);
                }).catch(err => {
                    throw CloudFunctionBase.error(err);
                })
            } catch (err) {
                throw CloudFunctionBase.error(err);
            }
        });
    }
}
