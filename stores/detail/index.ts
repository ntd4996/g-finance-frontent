import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type updatePayload = any;

export type CurrentLayoutState = {
    valueTab: number;
};

let initialState: CurrentLayoutState = {
    valueTab: 0,
};

export const currentDetailSlice = createSlice({
    name: "currentDetail",
    initialState,

    reducers: {
        updateValueTab(state, action: PayloadAction<updatePayload>) {
            state.valueTab = action.payload;
        },
        reset() {
            return initialState;
        },
    },
});
