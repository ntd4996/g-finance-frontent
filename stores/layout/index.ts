import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type updatePayload = any;

export type CurrentLayoutState = {
    isBack: boolean;
    title: string;
    isShowNav: boolean;
    isLogin: boolean;
    valueNav: number;
    isFixedHeader: boolean;
    isShowHeader: boolean;
    isShowHeaderAdmin: boolean;
};

let initialState: CurrentLayoutState = {
    isBack: false,
    isShowNav: true,
    isLogin: false,
    title: "",
    valueNav: 0,
    isFixedHeader: false,
    isShowHeader: true,
    isShowHeaderAdmin: false
};

export const currentLayoutSlice = createSlice({
    name: "currentLayout",
    initialState,

    reducers: {
        updateIsBack(state, action: PayloadAction<updatePayload>) {
            state.isBack = action.payload;
        },
        updateIsShowNav(state, action: PayloadAction<updatePayload>) {
            state.isShowNav = action.payload;
        },
        updateTitle(state, action: PayloadAction<updatePayload>) {
            state.title = action.payload;
        },
        updateIsLogin(state, action: PayloadAction<updatePayload>) {
            state.isLogin = action.payload;
        },
        updateValueNav(state, action: PayloadAction<updatePayload>) {
            state.valueNav = action.payload;
        },
        updateIsFixedHeader(state, action: PayloadAction<updatePayload>) {
            state.isFixedHeader = action.payload;
        },
        updateIsShowHeader(state, action: PayloadAction<updatePayload>) {
            state.isShowHeader = action.payload;
        },
        updateIsShowHeaderAdmin(state, action: PayloadAction<updatePayload>) {
            state.isShowHeaderAdmin = action.payload;
        },
        reset() {
            return initialState;
        },
    },
});
