import React, { useEffect, useState } from "react";
import Chart from "../icons/Chart";
import Plus from "../icons/Plus";
import styles from "./DetailTop.module.scss";
import dayjs from "dayjs";

export default function DetailTop(props: any) {
    const [data, setData] = useState({} as any);
    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
    }, [props.data]);

    return (
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
                        Vol: {data?.volume ?? 0} ({data?.weightAddition ?? 0}%)
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
    );
}
