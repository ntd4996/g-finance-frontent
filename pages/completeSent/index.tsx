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

    useEffect(() => {
        changeLayoutState();
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(false));
    };

    return (
        <div className="container-login pt-16">
            <div className="flex flex-col items-center">
                <Image
                    src="/logo-text.png"
                    width="146px"
                    height="146px"
                    className="pb-14"
                />
                <div className="text-login pb-5">Email sent successfully</div>

                <Image
                    src="/completeSent.png"
                    alt="news"
                    width="200px"
                    height="200px"
                    objectFit="contain"
                />

                <div className="textSecond mt-10">
                    Activation code has been sent in email
                    <br /> Please check your email
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
