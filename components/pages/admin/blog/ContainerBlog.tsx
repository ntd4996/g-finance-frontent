import { Box, Button, LinearProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./ContainerBlog.module.scss";
import dynamic from "next/dynamic";
import theme from "../../../../libs/theme";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { LoadingButton } from "@mui/lab";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface propsType {
    onSubmitData: (data: any) => void;
    onDeleteData: () => void;
    isCreate: boolean;
    loading: boolean;
    blog?: any;
}

export default function ContainerBlog(props: propsType) {
    const { blog, loading, isCreate } = props;
    const [namePreview, setNamePreview] = useState("");
    const [contentPreview, setContentPreview] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        reset,
        getValues,
    } = useForm({
        defaultValues: {
            title: blog?.title ?? "",
            content: blog?.content ?? "",
        },
    });

    const modules = {
        toolbar: [
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ align: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            ["image", "video", "link"],
            [{ color: [] }, { background: [] }],
        ],
    };

    useEffect(() => {
        if (blog?.id) {
            const data = {
                title: blog.title,
                content: blog.content,
            };
            reset(data);
            setIsPreview(true);
            setTimeout(() => {
                setIsPreview(false);
            }, 1);
        }
    }, [blog]);

    const onSubmit = (data: any) => {
        props.onSubmitData(data);
    };

    const deleteBlog = () => {
        props.onDeleteData();
    };

    const preview = () => {
        setContentPreview(getValues("content"));
        setNamePreview(getValues("title"));
        setIsPreview(true);
    };

    const unPreview = () => {
        setIsPreview(false);
    };

    return (
        <div className="w-full pt-24 px-5">
            {loading && (
                <Box sx={{ width: "100%" }} className="linear-progress">
                    <LinearProgress color="secondary" />
                </Box>
            )}
            <div role="presentation" className={styles.breadcrumb}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/admin">
                        Admin
                    </Link>
                    <Link underline="hover" color="inherit" href="/admin/blog">
                        Quản Lý Blog
                    </Link>
                    <Typography color="text.primary">
                        {props.isCreate ? "Thêm Mới Blog" : "Chỉnh Sửa Blog"}
                    </Typography>
                </Breadcrumbs>
            </div>
            {isPreview ? (
                <div className={styles.containerPreview}>
                    <div className={styles.unPreview}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={unPreview}
                            size="large"
                            className={styles.buttonUnPreview}
                        >
                            Quay trở lại
                        </Button>
                    </div>

                    <div className={styles.title}>{namePreview}</div>
                    <div
                        className="content ql-editor"
                        dangerouslySetInnerHTML={{ __html: contentPreview }}
                    ></div>
                </div>
            ) : (
                <div className={styles.containerBlog}>
                    <div className={styles.form}>
                        <div className={styles.displayField}>
                            <Controller
                                control={control}
                                rules={{
                                    required: "Tên Blog không được bỏ trống",
                                }}
                                name="title"
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextField
                                        id="outlined-password-input"
                                        label="Tên Blog"
                                        type="text"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={!!errors?.title}
                                        helperText={
                                            errors?.title?.message as any
                                        }
                                        required
                                        value={value}
                                        className={styles.field}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <div className="flex gap-3 items-center h-full pl-2">
                                {!isCreate && (
                                    <LoadingButton
                                        color="error"
                                        variant="contained"
                                        onClick={deleteBlog}
                                        size="large"
                                        className="bg-red-500 px-2 sm:px-5"
                                        loading={loading}
                                    >
                                        Xóa Blog
                                    </LoadingButton>
                                )}
                                <LoadingButton
                                    color="secondary"
                                    variant="outlined"
                                    onClick={preview}
                                    loading={loading}
                                    size="large"
                                >
                                    Preview
                                </LoadingButton>
                            </div>
                        </div>

                        <Controller
                            control={control}
                            name="content"
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <ReactQuill
                                    modules={modules}
                                    theme="snow"
                                    className={styles.editor}
                                    defaultValue={value}
                                    onChange={(content) => {
                                        setValue("content", content);
                                    }}
                                    readOnly={loading}
                                />
                            )}
                        />
                    </div>

                    <LoadingButton
                        color="primary"
                        variant="contained"
                        style={{
                            backgroundColor: theme.palette.primary.main,
                        }}
                        onClick={handleSubmit(onSubmit)}
                        size="large"
                        loading={loading}
                    >
                        Submit
                    </LoadingButton>
                </div>
            )}
        </div>
    );
}
