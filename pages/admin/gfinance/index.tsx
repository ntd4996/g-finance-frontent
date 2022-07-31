import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContainerAdmin from "../../../components/pages/admin/Container";
import { currentLayoutSlice } from "../../../stores/layout";

export default function GFinance() {
    const Dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        changeLayoutState();
        return () => {
            Dispatch(currentLayoutSlice.actions.updateIsShowButtonAdmin(false));
        };
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        Dispatch(currentLayoutSlice.actions.updateIsShowButtonAdmin(true));
    };

    const onSubmitData = (data: any) => {
        console.log("🚀 ~ data", data);
    };
    return (
        <div className="w-full">
            <ContainerAdmin
                onSubmitData={onSubmitData}
                breadcrumb="Về Gfinance"
            />
        </div>
    );
}
