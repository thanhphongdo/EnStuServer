import { Object } from 'parse/node';
export class ParseObjectBase extends Parse.Object {

    public static nameOfClass: string;

    public static newObject<T>(parseObj: Parse.Object, parseClass: any): T {
        let obj: any = new parseClass();
        obj._finishFetch(parseObj.toJSON());
        return obj;
    }

    public static newArrayObject<T>(parseObjs: Array<Parse.Object>, parseClass: any): Array<T> {
        let objArr: Array<T> = [];
        for (let i in parseObjs) {
            objArr.push(ParseObjectBase.newObject(parseObjs[i], parseClass));
        }
        return objArr;
    }

    constructor(className?: string) {
        super(className);
        
    }
}