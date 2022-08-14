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
    const params = { keywords: data?.component };
    const fetchData = async () => {
        await ArticlesServer.listArticles({ ...params, page: page, })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
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
        await ArticlesServer.listArticles({ ...params, page: pageList })
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
