import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AdminServices from "../../services/admin";
import { currentLayoutSlice } from "../../stores/layout";
import styles from "./gfinance.module.scss";

export default function GFinance() {
    const Dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [guide, setGuide] = useState({} as any);

    useEffect(() => {
        getGuide();
        changeLayoutState();
    }, []);

    const getGuide = async () => {
        setLoading(true);
        await AdminServices.getListOfCategory({ category: "gfinance" })
            .then((result) => {
                if (result?.data?.data) {
                    console.log("🚀 ~ result?.data?.data", result?.data?.data);
                    if (result?.data?.data?.length > 0) {
                        setGuide(result?.data?.data[0]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsBack(false));
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateValueNav(-1));
    };
    return (
        <div className="pagePaddingTop container ">
            <div className="pb-20 w-full pt-6">
                {!!guide?.id ? (
                    <div className={styles.containerPreview}>
                        <div className={styles.title}>{guide?.title}</div>
                        <div
                            className="content ql-editor"
                            dangerouslySetInnerHTML={{
                                __html: guide?.content,
                            }}
                        ></div>
                    </div>
                ) : (
                    <div className={styles.textComingSoon}>Coming soon...</div>
                )}
            </div>
        </div>
    );
}
