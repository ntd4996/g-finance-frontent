import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";
import { Alert, Fade, Snackbar } from "@mui/material";
import theme from "../../libs/theme";
import { LoadingButton } from "@mui/lab";
import _ from "lodash";
import AuthServer from "../../services/auth";
import ReactCodeInput from "react-code-input";

export default function ActiveCode() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const [errorText, setErrorText] = useState("");
    const [code, setCode] = useState("");
    const { email } = router.query;

    useEffect(() => {
        changeLayoutState();
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(false));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async () => {
        const data = { email, code };
        console.log(data);
        setIsLoading(true);
        await AuthServer.active(data)
            .then((result) => {
                if (result?.data.code !== 200) {
                    setErrorText(result.data.message);
                } else {
                    router.push("/activeComplete");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setIsLoading(false);
    };

    const resendCode = async () => {
        const data = { email };
        console.log(data);
        setIsLoading(true);
        await AuthServer.resend(data)
            .then((result) => {
                if (result?.data.code !== 200) {
                    setErrorText(result.data.message);
                } else {
                    setOpen(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setIsLoading(false);
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
                <div className="text-login pb-5">Active your account</div>

                {!!errorText && (
                    <div className="w-full text-red-500 ml-2 mb-3">
                        <Fade in={true}>
                            <Alert variant="outlined" severity="error">
                                {errorText}
                            </Alert>
                        </Fade>
                    </div>
                )}
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                    >
                        Activation code has been sent in email
                        <br /> Please check your email
                    </Alert>
                </Snackbar>

                <div className="my-10 flex flex-col gap-4">
                    <div className="ml-2 textSecond">
                        Email: <span className="text-black">{email}</span>
                    </div>
                    <div className="flex justify-center">
                        <ReactCodeInput
                            name="input-code"
                            type="text"
                            fields={4}
                            inputMode="latin"
                            onChange={(e) => {
                                setCode(e);
                            }}
                        />
                    </div>
                </div>

                <LoadingButton
                    color="secondary"
                    variant="contained"
                    style={{
                        backgroundColor: theme.palette.secondary.main,
                        width: "100%",
                        height: "48px",
                        marginBottom: "1rem",
                        marginTop: "1rem",
                        borderRadius: "8px",
                        fontSize: "14px",
                    }}
                    onClick={onSubmit}
                    loading={isLoading}
                >
                    Active
                </LoadingButton>

                <div
                    className="textSecond textPrimary cursor-pointer"
                    onClick={resendCode}
                >
                    Request Resend Active code
                </div>

                <div className="textSecond">Or</div>
                <div className="textSecond">
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
