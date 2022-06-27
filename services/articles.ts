import request from "../utils/request";

export interface IIndexTagListParamsType {
    page?: number;
    limit?: number;
    keyword?: string;
    id?: string | string[];
}

export default class ArticlesServer {
    static listArticles(params?: IIndexTagListParamsType) {
        return request({
            url: "/articles",
            method: "get",
            params: params,
        });
    }
    static detailArticles({ id }: any) {
        return request({
            url: `/articles/${id}`,
            method: "get",
        });
    }
}
