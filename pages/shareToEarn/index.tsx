import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../components/pages/shareToEarn/Banner";
import InputCopied from "../../components/pages/shareToEarn/InputCopied";
import ShareLink from "../../components/pages/shareToEarn/ShareLink";
import TabShare from "../../components/pages/shareToEarn/TabShare";
import { currentLayoutSlice } from "../../stores/layout";

export default function ShareToEarn() {
    const dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateTitle("Share to earn"));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        dispatch(currentLayoutSlice.actions.updateValueNav(-1));
    };
    return (
        <div className="pagePaddingTop bg-white pb-20">
            <Banner />
            <InputCopied />
            <ShareLink />
            <TabShare />
        </div>
    );
}
