import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type updatePayload = any;

export type CurrentLayoutState = {
    isBack: boolean;
    title: string;
    isShowNav: boolean;
};

let initialState: CurrentLayoutState = {
    isBack: false,
    isShowNav: true,
    title: "",
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
        reset() {
            return initialState;
        },
    },
});
