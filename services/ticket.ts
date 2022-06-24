import request from "../utils/request";

export interface IIndexTagListParamsType {
    page?: number;
    limit?: number;
    keyword?: string;
    id?: string | string[];
}

export default class TicketServer {
    static listTicket(params?: IIndexTagListParamsType) {
        return request({
            url: "/tickers",
            method: "get",
            params: params,
        });
    }

    static detailTicket(params?: IIndexTagListParamsType) {
        return request({
            url: `/tickers/${params?.id}`,
            method: "get",
        });
    }
}
