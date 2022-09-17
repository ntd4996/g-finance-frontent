import request from "../utils/request";
import _ from "lodash";

export interface IIndexTagListParamsType {
    page?: number;
    size?: number;
    limit?: number;
    keyword?: string;
    id?: string | string[];
}

export default class TicketServer {
    static listTicket(params?: IIndexTagListParamsType) {
        const paramsFilter = _.omitBy(
            params,
            (v) => _.isUndefined(v) || _.isNull(v) || v === ""
        );
        return request({
            url: "/api/tickers",
            method: "get",
            params: paramsFilter,
        });
    }

    static detailTicket(params?: IIndexTagListParamsType) {
        return request({
            url: `/api/tickers/${params?.id}`,
            method: "get",
        });
    }

    static historiesTicket(params?: IIndexTagListParamsType) {
        return request({
            url: `/api/tickers/histories/${params?.id}?size=${params?.size}`,
            method: "get",
        });
    }
}
