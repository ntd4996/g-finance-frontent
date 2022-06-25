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
                                    {data?.componentWeight
                                        ? parseInt(data?.componentWeight)
                                        : 0}
                                </span>{" "}
                                Điểm
                            </div>
                        </div>
                        <div className={styles.flexCol}>
                            <div className={styles.textGreen}>
                                {data?.costPrice ?? 0} (5.2%)
                            </div>
                            <div>
                                Vol: {data?.volume ?? 0} (
                                {data?.weightAddition ?? 0}%)
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
