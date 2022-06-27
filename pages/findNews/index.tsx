import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TabContainerNew from "../../components/atoms/TabContainerNew";
import { currentLayoutSlice } from "../../stores/layout";

export default function FindNews() {
    const Dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateValueNav(2));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsBack(false));
    };
    return (
        <div className="pagePaddingTop">
            <TabContainerNew />
        </div>
    );
}
