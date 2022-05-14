import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { currentLayoutSlice } from "../stores/layout";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        changeLayoutState();
        setTimeout(() => {
            router.push("/home");
        }, 3000);
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(false));
    };
    return (
        <div className="container-login">
            <div className="flex justify-center items-center w-full h-full">
                <Image src="/logo-text.png" width="275px" height="275px" />
            </div>
        </div>
    );
};

export default Home;
