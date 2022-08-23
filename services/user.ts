import request from "../utils/request";

export interface IIndexTagListParamsType {
    page?: number;
    limit?: number;
    keyword?: string;
    id?: string | string[];
}

export default class UserServer {
    static getUser(params?: IIndexTagListParamsType) {
        const token = localStorage.getItem("token");
        return request({
            url: "/api/users/me",
            method: "get",
            params: params,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
