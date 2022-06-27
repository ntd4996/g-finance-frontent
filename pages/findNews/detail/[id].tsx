import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./detail.module.scss";
import Clock from "../../../components/icons/Clock";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../../stores/layout";
import ArticlesServer from "../../../services/articles";
import dayjs from "dayjs";

export default function DetailFindNews() {
    const Dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [dataArticles, setDataArticles] = useState({} as any);
    const fetchData = async () => {
        await ArticlesServer.detailArticles({ id })
            .then((result) => {
                console.log("🚀 ~ result", result);
                if (result?.data?.data) {
                    setDataArticles(result?.data?.data);
                    console.log(result?.data?.data?.elements);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };
    useEffect(() => {
        changeLayoutState();
    }, []);
    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const changeLayoutState = () => {
        Dispatch(currentLayoutSlice.actions.updateIsShowNav(true));
        Dispatch(currentLayoutSlice.actions.updateIsFixedHeader(true));
        Dispatch(currentLayoutSlice.actions.updateValueNav(2));
        Dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
        Dispatch(currentLayoutSlice.actions.updateIsBack(false));
    };

    const backPage = () => {
        const storage = globalThis?.sessionStorage;
        const prevPath = storage.getItem("prevPath");
        const pattern = /\/detail\//;
        console.log(pattern.test(prevPath as string));
        if (pattern.test(prevPath as string)) {
            router.push({
                pathname: prevPath,
                query: { valueTab: "4" },
            });
        } else {
            router.back();
        }
    };

    return (
        <div className="w-full py-20">
            <div className="w-full px-5">
                <div className={styles.back}>
                    <IconButton
                        aria-label="delete"
                        className={styles.colorButton}
                        onClick={() => {
                            backPage();
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <span className={styles.titleHeader}>
                        {dataArticles?.title}
                    </span>
                </div>
                {dataArticles?.avatar ? (
                    <div className={styles.image}>
                        <Image
                            src={dataArticles?.avatar ?? "/no-image.jpeg"}
                            alt="news"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ) : (
                    ""
                )}

                <div className={styles.title}>{dataArticles?.title}</div>
                <div className={styles.sapo}>{dataArticles?.sapo}</div>
                <div className={styles.flexRow}>
                    <div className="flex gap-2 justify-center">
                        <Clock />
                        <div>
                            {dayjs(dataArticles?.publicTime).format(
                                "DD/MM/YYYY - HH:mm"
                            )}
                        </div>
                    </div>
                    <div>
                        Nguồn:{" "}
                        <span className={styles.textBlack}>
                            {dataArticles?.source}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>
                    {dataArticles?.elements?.map((ele: any, index: number) => {
                        return (
                            <div key={index}>
                                <p>{ele.content}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
