import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";
import Link from "next/link";

export default function CompleteSendEmail() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { email } = router.query;

    console.log("🚀 ~ email", email);

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
                    <br /> Please check your email:{" "}
                    <a
                        target="_blank"
                        href={`https://${
                            email?.slice(email.indexOf("@") + 1) as string
                        }`}
                        rel="noopener noreferrer"
                        className="text-blue-600 mt-20"
                    >
                        {email} [Open]
                    </a>
                    <br />
                    <span className="text-blue-600 italic text-base">
                        (Please also check your spam mail if you don't see it in
                        your Inbox)
                    </span>
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
