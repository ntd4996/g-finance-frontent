import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";

export default function Admin() {
    const Dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        changeLayoutState();
        return () => {
            Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(false));
        };
    }, []);
    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowHeaderAdmin(true));
    };

    return (
        <div>
            <div
                onClick={() => {
                    router.push("/home");
                }}
            >
                button
            </div>
        </div>
    );
}
