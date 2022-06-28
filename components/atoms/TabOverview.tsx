import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import styles from "./TabOverView.module.scss";
import _ from "lodash";
import { Skeleton } from "@mui/material";
import dayjs from "dayjs";

export default function TabOverView(props: any) {
    const { data, loading, toggleButtonDay } = props;
    const [dateDisplay, setDateDisplay] = useState({} as any);

    useEffect(() => {
        switch (toggleButtonDay) {
            case "now":
                chooseDataTicker(0);
                break;
            case "1D":
                chooseDataTicker(1);
                break;
            case "2D":
                chooseDataTicker(2);
                break;
            case "3D":
                chooseDataTicker(3);
                break;
            case "4D":
                chooseDataTicker(4);
                break;
            case "5D":
                chooseDataTicker(5);
                break;

            default:
                break;
        }
    }, [toggleButtonDay]);

    const chooseDataTicker = (day: number) => {
        if (data?.tickerPerDays) {
            const tickerPerDays = data?.tickerPerDays;
            let dataChoose = {} as any;
            tickerPerDays.map((ticker: any) => {
                const convertString = convertDate(ticker?.time);
                if (convertString?.length) {
                    const diff = dayjs().diff(convertString, "day");
                    if (diff === day) {
                        dataChoose = ticker;
                    }
                }
            });
            if (dataChoose?.id) {
                setDateDisplay(dataChoose);
            } else {
                setDateDisplay({});
            }
        }
    };

    const convertDate = (date: any): string => {
        let dateConvert = date.toString();
        if (dateConvert?.length === 8) {
            dateConvert =
                dateConvert.slice(0, 4) +
                "-" +
                dateConvert.slice(4, 6) +
                "-" +
                dateConvert.slice(6, 8);
            return dateConvert;
        }
        return "";
    };

    const RenderMetadata: FC = () => {
        let renderObj;
        if (dateDisplay?.metadata) {
            renderObj = Object.keys(dateDisplay?.metadata).map((key) => {
                return (
                    <div className={styles.flexCol} key={key}>
                        <div className={styles.title}>{key}</div>
                        <div className={styles.contentMeta}>
                            <span
                                className={
                                    dateDisplay?.metadata[key]?.deviant >= 0
                                        ? styles.textGreen
                                        : styles.textRed
                                }
                            >
                                {_.ceil(dateDisplay?.metadata[key]?.amount, 3)}
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
                            {dateDisplay?.profile?.logo_url ? (
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
