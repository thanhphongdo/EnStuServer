import { User } from './user';
import { Pointer } from 'parse';

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

export class Post extends ParseObjectBase {
    public static nameOfClass: string = 'Post';
    constructor() {
        super(Post.nameOfClass);
    }

    get message(): string {
        return this.get('message');
    }

    set message(value: string) {
        this.set('message', value);
    }

    get like(): number {
        return this.get('like');
    }

    set like(value: number) {
        this.set('like', value);
    }

    get user(): any {
        return this.get('user');
    }

    set user(value: any) {
        this.set('user', value);
    }
}