import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { currentLayoutSlice } from "./layout";

const storage = createWebStorage("local");
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["layout"],
};

const rootReducer = combineReducers({
    layout: currentLayoutSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const useStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
