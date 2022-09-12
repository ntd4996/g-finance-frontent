import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";
import TextField from "@mui/material/TextField";
import { Alert, LoadingButton } from "@mui/lab";
import theme from "../../libs/theme";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import AuthServer from "../../services/auth";
import {
    Autocomplete,
    createFilterOptions,
    Fade,
    InputAdornment,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const filter = createFilterOptions();

export default function SignUp() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const [errorText, setErrorText] = useState("");

    const [value, setValues] = useState("");
    const optionsEmail: any = [];

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
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
        nickname: Yup.string().required("Nickname is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(formSchema),
    });

    const changeEmail = (e: any) => {
        const value = e.target.value;
        setValues(value);
        setValue("nickname", value.slice(0, value.indexOf("@")));
    };

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        if (_.isEmpty(errors)) {
            await AuthServer.signup(data)
                .then((result) => {
                    if (result?.data.code !== 200) {
                        setErrorText(result.data.message);
                    } else {
                        router.push(`/completeSent?email=${data.email}`);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setIsLoading(false);
    };

    const renderOptionsEmail = (value: string) => {
        if (value) {
            return [
                `${value}@gmail.com`,
                `${value}@icloud.com`,
                `${value}@yahoo.com`,
                `${value}@yahoo.com.vn`,
                `${value}@hotmail.com`,
            ];
        }
        return [];
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

                {!!errorText && (
                    <div className="w-full text-red-500 ml-2 mb-3">
                        <Fade in={true}>
                            <Alert variant="outlined" severity="error">
                                {errorText}
                            </Alert>
                        </Fade>
                    </div>
                )}

                <Autocomplete
                    value={value}
                    onChange={(event, newValue: any) => {
                        setValues(newValue);
                        setValue(
                            "nickname",
                            newValue.slice(0, newValue.indexOf("@"))
                        );
                    }}
                    filterOptions={(options: any, params: any) => {
                        const inputValue = params?.inputValue;
                        if (params?.inputValue) {
                            if (!/@/.test(inputValue)) {
                                const arrayOptions =
                                    renderOptionsEmail(inputValue);
                                const filtered = filter(arrayOptions, params);
                                return filtered;
                            } else {
                                const inputSlice = inputValue.slice(
                                    0,
                                    inputValue.indexOf("@")
                                );
                                const arrayOptions =
                                    renderOptionsEmail(inputSlice);
                                const filtered = filter(arrayOptions, params);
                                console.log("🚀 ~ filtered", filtered);
                                return filtered;
                            }
                        }

                        const filtered = filter(options, params);
                        return filtered;
                    }}
                    id="free-solo-dialog-demo"
                    options={optionsEmail}
                    disableClearable
                    renderOption={(props, option) => (
                        <li {...props}>{option}</li>
                    )}
                    freeSolo
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    sx={{
                        width: "100%",
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
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
                            onChange={changeEmail}
                        />
                    )}
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
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {!!errors?.password ? (
                                    <ErrorIcon style={{ color: "#d32f2f" }} />
                                ) : getValues("password")?.length ? (
                                    <CheckCircleIcon
                                        style={{ color: "green" }}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Confirm password"
                    id="outlined-size-normal"
                    color="secondary"
                    placeholder="Confirm password"
                    className="textField-login pb-5"
                    error={!!errors?.confirmPassword}
                    helperText={errors?.confirmPassword?.message as any}
                    type="password"
                    {...register("confirmPassword")}
                    required
                    disabled={isLoading}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {!!errors?.confirmPassword ? (
                                    <ErrorIcon style={{ color: "#d32f2f" }} />
                                ) : getValues("confirmPassword")?.length ? (
                                    <CheckCircleIcon
                                        style={{ color: "green" }}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    value={getValues("nickname") ? getValues("nickname") : ""}
                    label="Nickname"
                    id="nickname"
                    color="secondary"
                    error={!!errors?.nickname}
                    helperText={errors?.nickname?.message as any}
                    required
                    placeholder="Nickname"
                    className="textField-login"
                    {...register("nickname")}
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
                    Sign up
                </LoadingButton>

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
