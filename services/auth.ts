import request from "../utils/request";

export interface AuthParamsType {
    email?: String | String[] | undefined;
    password?: String;
    confirmPassword?: String;
    nickname?: String;
    code?: String;
}

export default class AuthServer {
    static signup(params?: AuthParamsType) {
        return request({
            url: "/api/users/signup",
            method: "POST",
            data: params,
        });
    }
    static signin(params?: AuthParamsType) {
        return request({
            url: "/api/users/signin",
            method: "POST",
            data: params,
        });
    }
    static active(params?: AuthParamsType) {
        return request({
            url: "/api/users/active",
            method: "PUT",
            data: params,
        });
    }
    static resend(params?: AuthParamsType) {
        return request({
            url: "/api/users/active",
            method: "GET",
            params: params,
        });
    }
}
