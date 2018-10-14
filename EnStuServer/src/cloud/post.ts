import { CloudFunctionBase } from '../parse/index';
import { RequestListPost, ResponseListBase, Post } from '../model/index';
import { ParseQueryBase } from '../parse';

export class PostCloud extends CloudFunctionBase {
    constructor() {
        super();
        // this.defineCloud(this.getListPost);
    }
}