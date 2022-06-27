import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ArticlesServer from "../../services/articles";
import Clock from "../icons/Clock";
import CardNew from "./CardNew";
import CardNewSkeleton from "./CardNewSkeleton";
import styles from "./TopNews.module.scss";

export default function TopNews() {
    const [loading, setLoading] = useState(true);
    const [dataArticles, setDataArticles] = useState([] as any[]);
    const [firstArticle, setFirstArticle] = useState({} as any);
    const [page, setPage] = useState(0);
    const fetchData = async () => {
        await ArticlesServer.listArticles({ page: page })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
                    if (data?.length > 0) {
                        setFirstArticle(data[0]);
                        data.shift();
                    }
                    setDataArticles(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };
    const getMorePost = async () => {
        const pageList = page + 1;
        await ArticlesServer.listArticles({ page: pageList })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
                    setDataArticles([...dataArticles, ...data]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
        setPage(page + 1);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="pb-20">
            {firstArticle?.id ? (
                <Link href={`/findNews/detail/${firstArticle?.id}`}>
                    <div className={styles.firstArticle}>
                        <div className={styles.image}>
                            <Image
                                src={firstArticle?.avatar ?? "/no-image.jpeg"}
                                alt="news"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.titleFirst}>
                            <div className={styles.title}>
                                {firstArticle?.title}
                            </div>
                            <div className={styles.flexRow}>
                                <div className="flex gap-2 justify-center">
                                    <Clock />
                                    <div>
                                        {dayjs(firstArticle?.publicTime).format(
                                            "DD/MM/YYYY - HH:mm"
                                        )}
                                    </div>
                                </div>
                                <div>
                                    Nguồn:
                                    <span className={styles.textBlack}>
                                        {firstArticle?.source}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                {firstArticle?.sapo}
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                ""
            )}

            {loading ? (
                <div>
                    {[...Array(10)].map((x, i) => (
                        <div key={i}>
                            <CardNewSkeleton />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <InfiniteScroll
                        dataLength={dataArticles.length}
                        next={getMorePost}
                        hasMore={true}
                        loader={<CardNewSkeleton />}
                        endMessage={<h4>Nothing more to show</h4>}
                    >
                        {dataArticles.map((articles, index) => (
                            <CardNew articles={articles} key={index} />
                        ))}
                    </InfiniteScroll>
                </div>
            )}
        </div>
    );
}
