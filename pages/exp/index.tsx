import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TabContainerExp from "../../components/atoms/TabContainerExp";
import { currentLayoutSlice } from "../../stores/layout";

export default function Exp() {
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
        <div className="pagePaddingTop pb-20">
            <TabContainerExp />
        </div>
    );
}
