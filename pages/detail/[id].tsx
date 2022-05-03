import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";
import ToggleButtonDay from "../../components/atoms/ToggleButtonDay";
import DetailTop from "../../components/atoms/DetailTop";
import TabContainer from "../../components/atoms/TabContainer";

export default function Detail() {
    const Dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsBack(true));
        Dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateValueNav(-1));
        Dispatch(
            currentLayoutSlice.actions.updateTitle(
                "AAS - Chứng khoán Smartinvest (UPC...)"
            )
        );
    };

    return (
        <div className="pagePaddingTop">
            <DetailTop />
            <ToggleButtonDay />
            <TabContainer />
        </div>
    );
}
