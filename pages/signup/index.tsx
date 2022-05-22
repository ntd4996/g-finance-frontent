import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import theme from "../../libs/theme";
import Google from "../../components/icons/Google";
import FacebookCircle from "../../components/icons/FacebookCircle";
import Apple from "../../components/icons/Apple";

export default function SignUp() {
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
                <div className="text-login pb-5">Create your account</div>
                <TextField
                    label="Your email"
                    id="outlined-size-normal"
                    color="secondary"
                    placeholder="Your email"
                    className="textField-login"
                />
                <TextField
                    label="Password"
                    id="outlined-size-normal"
                    color="secondary"
                    placeholder="Password"
                    className="textField-login"
                    type="password"
                />
                <TextField
                    label="Confirm password"
                    id="outlined-size-normal"
                    color="secondary"
                    placeholder="Confirm password"
                    className="textField-login"
                    type="password"
                />
                <Button
                    color="secondary"
                    variant="contained"
                    style={{
                        backgroundColor: theme.palette.secondary.main,
                        width: "100%",
                        height: "48px",
                        marginBottom: "1rem",
                    }}
                    onClick={() => {
                        router.push("/home");
                    }}
                >
                    Sign up
                </Button>
                <div className="textSecond">- Or sign in with -</div>
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
                </div>
            </div>
        </div>
    );
}
