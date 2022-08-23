import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";
import TextField from "@mui/material/TextField";
import { Alert, Button, Fade } from "@mui/material";
import theme from "../../libs/theme";
import Google from "../../components/icons/Google";
import FacebookCircle from "../../components/icons/FacebookCircle";
import Apple from "../../components/icons/Apple";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import _ from "lodash";
import AuthServer from "../../services/auth";
import UserServer from "../../services/user";
import { currentAccountSlice } from "../../stores/account";

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        changeLayoutState();
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(false));
    };

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .max(255, "Password cannot exceed more than 12 characters")
            .email("Invalid email address"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password length should be at least 8 characters")
            .max(20, "Password cannot exceed more than 20 characters"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        if (_.isEmpty(errors)) {
            await AuthServer.signin(data)
                .then((result) => {
                    if (result?.data.code !== 200) {
                        setErrorText(result.data.message);
                    } else if (result?.data?.data?.token) {
                        const token = result.data.data.token;
                        localStorage.setItem("token", token);
                        getUser();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setIsLoading(false);
    };

    const getUser = () => {
        const token = localStorage.getItem("token");
        if (token) {
            UserServer.getUser()
                .then((result) => {
                    console.log("🚀 ~ result", result?.data?.data);
                    if (result?.data?.data) {
                        dispatch(
                            currentAccountSlice.actions.updateUser(
                                result?.data?.data
                            )
                        );
                        router.push("/home");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="container-login pt-16">
            <div className="flex flex-col items-center">
                <Image
                    src="/logo-text.png"
                    width="146px"
                    height="146px"
                    className="pb-14 cursor-pointer"
                    onClick={() => router.push("/home")}
                />
                <div className="text-login pb-5">Login to your account</div>

                {!!errorText && (
                    <div className="w-full text-red-500 ml-2 mb-3">
                        <Fade in={true}>
                            <Alert variant="outlined" severity="error">
                                {errorText}
                            </Alert>
                        </Fade>
                    </div>
                )}

                <TextField
                    label="Your email"
                    id="email"
                    color="secondary"
                    error={!!errors?.email}
                    helperText={errors?.email?.message as any}
                    required
                    placeholder="Your email"
                    className="textField-login"
                    {...register("email")}
                    disabled={isLoading}
                />

                <TextField
                    label="Password"
                    id="password"
                    color="secondary"
                    error={!!errors?.password}
                    helperText={errors?.password?.message as any}
                    type="password"
                    required
                    placeholder="Password"
                    className="textField-login"
                    {...register("password")}
                    disabled={isLoading}
                />
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
                    onClick={handleSubmit(onSubmit)}
                    loading={isLoading}
                >
                    Sign in
                </LoadingButton>

                {/* <div className="textSecond">- Or sign in with -</div>
                <div className="flex gap-4 py-5">
                    <div className="divBoxIcon">
                        <Google />
                    </div>
                    <div className="divBoxIcon">
                        <FacebookCircle />
                    </div>
                    <div className="divBoxIcon">
                        <Apple />
                    </div>
                </div> */}
                <div className="textSecond">
                    Don’t have an account?{" "}
                    <span
                        className="textPrimary cursor-pointer"
                        onClick={() => {
                            router.push("/signup");
                        }}
                    >
                        Sign up
                    </span>
                </div>
            </div>
        </div>
    );
}
