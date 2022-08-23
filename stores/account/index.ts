import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export type updatePayload = any;

export type CurrentLayoutState = {
    isUserVip: boolean;
    isUserAdmin: boolean;
    user: any;
};

let initialState: CurrentLayoutState = {
    isUserVip: false,
    user: {},
    isUserAdmin: false,
};

export const currentAccountSlice = createSlice({
    name: "currentAccount",
    initialState,

    reducers: {
        updateIsUserVip(state, action: PayloadAction<updatePayload>) {
            state.isUserVip = action.payload;
        },
        updateUser(state, action: PayloadAction<updatePayload>) {
            if (
                action.payload?.roles?.length > 0 &&
                _.includes(action.payload?.roles, "ROLE_ADMIN")
            ) {
                state.isUserAdmin = true;
            } else {
                state.isUserAdmin = false;
            }

            state.user = action.payload;
        },
        reset() {
            return initialState;
        },
    },
});
