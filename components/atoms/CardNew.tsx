import React from "react";
import styles from "./CardNew.module.scss";
import Image from "next/image";
import Clock from "../icons/Clock";
import Link from "next/link";
import dayjs from "dayjs";

export default function CardNew(props: any) {
    const { articles } = props;
    return (
        <Link href={`/findNews/detail/${articles?.id}`}>
            <div className={styles.cardNew}>
                <div className={styles.image}>
                    <Image
                        src={articles?.avatar || "/no-image.jpeg"}
                        alt="news"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{articles?.title}</div>
                    <div className={styles.sapo} dangerouslySetInnerHTML={{ __html: articles?.sapo }}></div>
                    <div className={styles.flexRow}>
                        <div className="flex gap-2 justify-center">
                            <Clock />
                            <div>
                                {dayjs(articles?.publicTime).format(
                                    "DD/MM/YYYY - HH:mm"
                                )}
                            </div>
                        </div>
                        <div>
                            Nguồn:{" "}
                            <span className={styles.textBlack}>
                                {articles?.source}
                            </span>
                        </div>
                    </div>

                    {/* <div>
                        Giá mục tiêu:{" "}
                        <span className={styles.bold}>80,100</span>
                    </div> */}
                </div>
            </div>
        </Link>
    );
}
