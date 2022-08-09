import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import RanksTable from "../../components/pages/ranks/RanksTable";
import ToggleButtonDay from "../../components/pages/ranks/ToggleButtonDay";
import { currentLayoutSlice } from "../../stores/layout";

export default function Ranks() {
    const Dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsBack(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateTitle("Xếp hạng cổ phiếu"));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsLogin(true));
    };

    return (
        <div className="pagePaddingTop pageNotNav pb-20">
            <ToggleButtonDay />
            <RanksTable />
        </div>
    );
}
