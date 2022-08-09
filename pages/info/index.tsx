import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";

export default function Info() {
    const Dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsBack(false));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateValueNav(-1));
    };
    return (
        <div className="pagePaddingTop">
            <div className="pb-20 w-full">
                <div className="textComingSoon">Coming soon...</div>
            </div>
        </div>
    );
}
