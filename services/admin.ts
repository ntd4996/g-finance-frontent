import request from "../utils/request";

export interface IIndexTagListParamsType {
    page?: number;
    limit?: number;
    keyword?: string;
    id?: string | string[];
    category?: string;
    slug?: string | string[];
    body?: any;
}

export default class AdminServices {
    static getListOfCategory(params?: IIndexTagListParamsType) {
        const token = localStorage.getItem("token");
        return request({
            url: `/api/blogs/categories/${params?.category}`,
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    static getDetailCategory(params?: IIndexTagListParamsType) {
        const token = localStorage.getItem("token");
        return request({
            url: `/api/blogs/${params?.slug}`,
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    static updateDetailCategory(params?: IIndexTagListParamsType) {
        const token = localStorage.getItem("token");
        return request({
            url: `/api/blogs/${params?.slug}`,
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: params?.body,
        });
    }
    static createItemInCategory(params?: IIndexTagListParamsType) {
        const token = localStorage.getItem("token");
        return request({
            url: `/api/blogs/categories/${params?.category}`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: params?.body,
        });
    }
    static deleteItemInCategory(params?: IIndexTagListParamsType) {
        const token = localStorage.getItem("token");
        return request({
            url: `/api/blogs/${params?.slug}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
