import React, { useEffect, useState } from "react";
import styles from "./CardButton.module.scss";
import ChartButton from "./ChartButton";
import { useRouter } from "next/router";
import TicketServer from "../../services/ticket";

export default function CardButton() {
    const router = useRouter();
    const [dataFetch, setDataFetch] = useState([]);
    const [loading, setLoading] = useState(true);

    const redirectPage = (code: string) => {
        if (code) {
            router.push(`/detail/${code}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await TicketServer.listTicket()
            .then((result) => {
                if (result?.data?.data) {
                    console.log("🚀 ~ result?.data?.data", result?.data?.data);
                    setDataFetch(result.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    return (
        <div className={styles.CardButton}>
            {dataFetch?.map((row: any, index: number) => {
                if (index < 4) {
                    return (
                        <div
                            className={styles.card}
                            onClick={() => redirectPage(row?.component)}
                        >
                            <div className={styles.topCard}>
                                <div className={styles.title}>
                                    {row?.component}
                                </div>
                                <div className={styles.numberLabel}>
                                    {parseInt(row?.scope) ?? 0}
                                </div>
                            </div>
                            <div className={styles.bottomCard}>
                                <div className={styles.flexCol}>
                                    <span className={styles.numberTop}>
                                        {row.costPrice ?? 0}
                                    </span>
                                    <span className={styles.numberBottom}>
                                        {row.volume ?? 0}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.positionChart}>
                                <div className={styles.chard}>
                                    <ChartButton />
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}
