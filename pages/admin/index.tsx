import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";

export default function Admin() {
    const Dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        changeLayoutState();
        return () => {
            Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(false));
            Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(false));
            Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        };
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
    };

    return <div></div>;
}
