import React, { useEffect, useState } from "react";
import ArticlesServer from "../../services/articles";
import CardNew from "./CardNew";
import CardNewSkeleton from "./CardNewSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

export default function TabNewspapers(props: any) {
    const { data } = props;
    const [loading, setLoading] = useState(true);
    const [dataArticles, setDataArticles] = useState([] as any[]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isNoArticles, setIsNoArticles] = useState(false);

    const params = { keywords: data?.component };
    const fetchData = async () => {
        await ArticlesServer.listArticles({ ...params, page: page })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
                    setDataArticles(data);
                    if (data?.length === 0) {
                        setHasMore(false);
                        setIsNoArticles(true);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };
    const getMorePost = async () => {
        const pageList = page + 1;
        await ArticlesServer.listArticles({ ...params, page: pageList })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
                    setDataArticles([...dataArticles, ...data]);
                    if (data?.length === 0) {
                        setHasMore(false);
                    }
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
        <div className="w-full pb-20">
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
                    {isNoArticles ? (
                        <div>
                            <div className="pb-20">
                                <div className="textComingSoon">
                                    Không có bài phần tích
                                </div>
                            </div>
                        </div>
                    ) : (
                        <InfiniteScroll
                            dataLength={dataArticles.length}
                            next={getMorePost}
                            hasMore={hasMore}
                            loader={<CardNewSkeleton />}
                        >
                            {dataArticles.map((articles, index) => (
                                <CardNew articles={articles} key={index} />
                            ))}
                        </InfiniteScroll>
                    )}
                </div>
            )}
        </div>
    );
}
