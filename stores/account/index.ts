import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type updatePayload = any;

export type CurrentLayoutState = {
    isUserVip: boolean;
};

let initialState: CurrentLayoutState = {
    isUserVip: false,
};

export const currentAccountSlice = createSlice({
    name: "currentAccount",
    initialState,

    reducers: {
        updateIsUserVip(state, action: PayloadAction<updatePayload>) {
            state.isUserVip = action.payload;
        },
        reset() {
            return initialState;
        },
    },
});
