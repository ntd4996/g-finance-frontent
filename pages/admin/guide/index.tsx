import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContainerGuide from "../../../components/pages/admin/guide/ContainerGuide";
import { currentLayoutSlice } from "../../../stores/layout";
import styles from "./guide.module.scss";

export default function Guide() {
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
        // handleClickOpen();
    };
    return (
        <div className={styles.container}>
            <ContainerGuide onSubmitData={onSubmitData} />
        </div>
    );
}
