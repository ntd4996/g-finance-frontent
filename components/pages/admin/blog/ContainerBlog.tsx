import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./ContainerBlog.module.scss";
import dynamic from "next/dynamic";
import theme from "../../../../libs/theme";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface propsType {
    onSubmitData: (data: any) => void;
}

export default function ContainerBlog(props: propsType) {
    const [namePreview, setNamePreview] = useState("");
    const [contentPreview, setContentPreview] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        getValues,
    } = useForm();

    const modules = {
        toolbar: [
            [{ header: "1" }, { header: "2" }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["image", "video"],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    };

    const formats = [
        "header",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
    ];

    useEffect(() => {
        setValue("name", "");
        setValue("content", "");
    }, []);

    const onSubmit = (data: any) => {
        props.onSubmitData(data);
    };

    const preview = () => {
        setContentPreview(getValues("content"));
        setNamePreview(getValues("name"));
        setIsPreview(true);
    };

    const unPreview = () => {
        setIsPreview(false);
    };

    return (
        <div className="w-full">
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
                        className="content"
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
                                name="name"
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextField
                                        id="outlined-password-input"
                                        label="Tên Blog"
                                        type="text"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={!!errors?.name}
                                        helperText={
                                            errors?.name?.message as any
                                        }
                                        required
                                        value={value}
                                        className={styles.field}
                                    />
                                )}
                            />

                            <Button
                                color="secondary"
                                variant="outlined"
                                onClick={preview}
                                size="large"
                            >
                                Preview
                            </Button>
                        </div>

                        <Controller
                            control={control}
                            name="content"
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <ReactQuill
                                    modules={modules}
                                    formats={formats}
                                    theme="snow"
                                    className={styles.editor}
                                    defaultValue={value}
                                    onChange={(content) => {
                                        setValue("content", content);
                                    }}
                                />
                            )}
                        />
                    </div>

                    <Button
                        color="primary"
                        variant="contained"
                        style={{
                            backgroundColor: theme.palette.primary.main,
                        }}
                        onClick={handleSubmit(onSubmit)}
                        size="large"
                    >
                        Submit
                    </Button>
                </div>
            )}
        </div>
    );
}
