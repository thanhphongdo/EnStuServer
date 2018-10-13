export class  ParseQuery extends Parse.Query {
    objClass: any;
    constructor(className: string, objClass: any) {
        super(className);
        this.objClass = objClass
    }

    find<T>(options?: Parse.Query.FindOptions):Parse.Promise<Array<T>>{
        var self = this;
        return Parse.Promise.when(super.find(options).then(function(data){
            var dataConvert = self.objClass.newArrayObject(data, self.objClass);
            return dataConvert;
        }));
    }

    first<T>(options?: Parse.Query.FindOptions):Parse.Promise<T>{
        var self = this;
        return Parse.Promise.when(super.first(options).then(function(data){
            var dataConvert = self.objClass.newObject(data, self.objClass);
            return dataConvert;
        }));
    }

    get<T>(objectId: string, options?: Parse.Query.FindOptions):Parse.Promise<T>{
        var self = this;
        return Parse.Promise.when(super.get(objectId, options).then(function(data){
            var dataConvert = self.objClass.newObject(data, self.objClass);
            return dataConvert;
        }));
    }
}