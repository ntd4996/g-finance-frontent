import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToggleButtonDay from "../components/atoms/ToggleButtonDay";
import { currentLayoutSlice } from "../stores/layout";

export default function ranks() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateTitle("Xếp hạng cổ phiếu"));
    }, []);

    return (
        <div className="pagePaddingTop pageNotNav">
            <ToggleButtonDay />
        </div>
    );
}
