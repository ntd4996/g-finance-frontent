import React, { useEffect, useState } from "react";
import Chart from "../icons/Chart";
import Plus from "../icons/Plus";
import styles from "./DetailTop.module.scss";
import dayjs from "dayjs";
import { Skeleton } from "@mui/material";

export default function DetailTop(props: any) {
    const { loading } = props;
    const [data, setData] = useState({} as any);
    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
    }, [props.data]);

    return (
        <div>
            {loading ? (
                <div className={styles.container}>
                    <div className={styles.flexRow}>
                        <Skeleton
                            variant="rectangular"
                            width={72}
                            height={72}
                            className="rounded-2xl"
                        />

                        <div className={styles.flexCol}>
                            <Skeleton variant="text" height={40} width="50vw" />
                            <Skeleton variant="text" height={40} width="50vw" />
                        </div>
                    </div>

                    <div className={styles.flexRow}>
                        <div className={styles.flexCol}>
                            <Skeleton variant="text" height={40} width={40} />
                            <Skeleton variant="text" height={40} width={40} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.flexRow}>
                        <div className={styles.numberLabel}>
                            <div>
                                <span className={styles.number}>
                                    {data?.scope
                                        ? parseInt(data?.scope)
                                        : 0}
                                </span>{" "}
                                Điểm
                            </div>
                        </div>
                        <div className={styles.flexCol}>
                            <div
                                className={
                                    data?.priceDifference >= 0
                                        ? styles.textGreen
                                        : styles.textRed
                                }
                                style={{ color: data?.priceColor }}
                            >
                                {(data?.costPrice ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })} ({Math.round((data?.priceDifference || 0) * 100) / 100}
                                %)
                            </div>
                            <div>
                                Vol: {(data?.volume ?? 0).toLocaleString('en-US', { minimumFractionDigits: 0 })} (
                                {Math.round(data?.volumeDifferent ?? 0 * 100) / 100}%)
                            </div>
                        </div>
                    </div>

                    <div className={styles.flexColRight}>
                        <div className={styles.flexRow}>
                            <Chart />
                            <Plus />
                        </div>
                        {dayjs().format("DD/MM/YYYY")}
                    </div>
                </div>
            )}
        </div>
    );
}
