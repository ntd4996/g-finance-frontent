import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";
import { Alert, Fade } from "@mui/material";
import theme from "../../libs/theme";
import { LoadingButton } from "@mui/lab";
import _ from "lodash";
import AuthServer from "../../services/auth";
import ReactCodeInput from "react-code-input";

export default function CompleteSendEmail() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [counter, setCounter] = useState(5);

    useEffect(() => {
        changeLayoutState();
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(false));
        setTimeout(() => {
            router.push("/login");
        }, 5000);
    };

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className="container-login pt-16">
            <div className="flex flex-col items-center">
                <Image
                    src="/logo-text.png"
                    width="146px"
                    height="146px"
                    className="pb-14"
                />
                <div className="text-login pb-5">
                    Account activated successfully
                </div>

                <Image
                    src="/activeComplete.png"
                    alt="news"
                    width="280px"
                    height="280px"
                    objectFit="contain"
                />

                <div className="textSecond mt-10">
                    You will be redirected to the login page after {counter}{" "}
                    seconds
                </div>

                <div className="textSecond mt-10">
                    Back to{" "}
                    <span
                        className="textPrimary cursor-pointer"
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        Login
                    </span>
                </div>
            </div>
        </div>
    );
}
