import Image from "next/image";
import React, { FC } from "react";
import styles from "./TabOverView.module.scss";
import _ from "lodash";
import { Skeleton } from "@mui/material";

export default function TabOverView(props: any) {
    const { data, loading } = props;
    const RenderMetadata: FC = () => {
        let renderObj;
        if (data?.metadata) {
            renderObj = Object.keys(data?.metadata).map((key) => {
                return (
                    <div className={styles.flexCol} key={key}>
                        <div className={styles.title}>{key}</div>
                        <div className={styles.contentMeta}>
                            <span
                                className={
                                    data?.metadata[key] > 0
                                        ? styles.textGreen
                                        : styles.textRed
                                }
                            >
                                {_.ceil(data?.metadata[key], 3)}
                            </span>
                        </div>
                    </div>
                );
            });
        }
        return <div className={styles.gird}>{renderObj}</div>;
    };

    return (
        <div className="w-full container">
            <div className={styles.tradingView}>Tradingview</div>
            <div>
                {loading ? (
                    <div className={styles.gird}>
                        {[...Array(12)].map((x, i) => (
                            <div key={i}>
                                <Skeleton
                                    variant="rectangular"
                                    width={70}
                                    height={20}
                                    className="rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <RenderMetadata />
                )}
            </div>

            <div className={styles.titleContent}>Thông tin doanh nghiệp</div>
            {loading ? (
                <div className={styles.content}>
                    <div className={styles.information}>
                        <div className={styles.logo}>
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height="100%"
                                className="rounded-2xl"
                            />
                        </div>
                        <div>
                            <div>
                                <Skeleton
                                    variant="text"
                                    width="50vw"
                                    height="100%"
                                />
                            </div>
                            <div>
                                <Skeleton
                                    variant="text"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div>
                                <Skeleton
                                    variant="text"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div>
                                <Skeleton
                                    variant="text"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Skeleton variant="text" width="90vw" height="100%" />
                    </div>
                    <div>
                        {[...Array(12)].map((x, i) => (
                            <div key={i}>
                                <Skeleton
                                    variant="text"
                                    width="90vw"
                                    height="100%"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : data?.profile ? (
                <div className={styles.content}>
                    <div className={styles.information}>
                        <div>
                            {data?.profile?.logo_url ? (
                                <div className={styles.logo}>
                                    <Image
                                        src={data?.profile?.logo_url}
                                        alt="logo"
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="fill"
                                    />
                                </div>
                            ) : (
                                <div className={styles.logo}>
                                    <Image
                                        src="/no-image.jpeg"
                                        alt="news"
                                        width="100px"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            <div>
                                <span className="font-bold">Điện thoại:</span>{" "}
                                <a
                                    href={`tel:${data?.profile?.telephone}`}
                                    className="textLink"
                                >
                                    {data?.profile?.telephone}
                                </a>
                            </div>
                            <div>
                                <span className="font-bold">Website:</span>{" "}
                                <a
                                    href={`https://${data?.profile?.website}`}
                                    className="textLink"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {data?.profile?.website}
                                </a>
                            </div>
                            <div>
                                <span className="font-bold">MST:</span>{" "}
                                <span>{data?.profile?.enterprise_code}</span>
                            </div>
                            <div>
                                <span className="font-bold">Fax:</span>{" "}
                                <span>{data?.profile?.fax}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">Địa chỉ:</span>{" "}
                        {data?.profile?.address}
                    </div>
                    <div>{data?.profile?.intro}</div>
                </div>
            ) : (
                <div className={styles.content}>
                    <span> Không có thông tin Doanh nghiệp</span>
                </div>
            )}
        </div>
    );
}
