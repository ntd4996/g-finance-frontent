import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import RanksTable from "../components/atoms/RanksTable";
import ToggleButtonDay from "../components/atoms/ToggleButtonDay";
import { currentLayoutSlice } from "../stores/layout";

export default function Ranks() {
    const Dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsBack(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        Dispatch(currentLayoutSlice.actions.updateTitle("Xếp hạng cổ phiếu"));
    };

    return (
        <div className="pagePaddingTop pageNotNav">
            <ToggleButtonDay />
            <RanksTable />
        </div>
    );
}
