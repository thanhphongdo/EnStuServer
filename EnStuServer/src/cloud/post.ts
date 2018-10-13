import { CloudFunctionBase } from '../parse/index';
import { RequestListPost, ResponseListBase, Post } from '../model/index';
import { ParseQueryBase } from '../parse';

export class PostCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.getListPost);
    }

    getListPost(params: RequestListPost, request: Parse.Cloud.FunctionRequest): Parse.Promise<ResponseListBase<Post>> {
        let postQuery = new ParseQueryBase(Post.nameOfClass, Post);
        return Parse.Promise.when(postQuery.get<Post>('EFzFL59CcF', { useMasterKey: true }).then((post) => {
            let response: ResponseListBase<Post> = new ResponseListBase<Post>(1, 10, [post]);
            return response;
        }).catch(err => {
            return err;
        }));
    }
}