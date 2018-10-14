import { Promise } from 'parse/node';
export class ParseQueryBase extends Parse.Query {
    objClass: any;
    constructor(objClass: any) {
        super(objClass.name);
        this.objClass = objClass
    }

    find<T>(options?: Parse.Query.FindOptions): Parse.Promise<Array<T>> {
        var self = this;
        return Promise.when(super.find(options).then(data => {
            var dataConvert = self.objClass.newArrayObject(data, self.objClass);
            return dataConvert;
        }).catch(err => {
            throw err;
        }));
    }

    first<T>(options?: Parse.Query.FindOptions): Parse.Promise<T> {
        var self = this;
        return Promise.when(super.first(options).then(function (data) {
            var dataConvert = self.objClass.newObject(data, self.objClass);
            return dataConvert;
        }));
    }

    get<T>(objectId: string, options?: Parse.Query.FindOptions): Parse.Promise<T> {
        var self = this;
        return Promise.when(super.get(objectId, options).then(function (data) {
            var dataConvert = self.objClass.newObject(data, self.objClass);
            return dataConvert;
        }));
    }
}