import React from "react";
import styles from "./CardNew.module.scss";
import Image from "next/image";
import Clock from "../icons/Clock";
import Link from "next/link";

export default function CardNew() {
    return (
        <Link href="/findNews/detail/id">
            <div className={styles.cardNew}>
                <div className={styles.image}>
                    <Image
                        src="/news.png"
                        alt="news"
                        width="100px"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                    />
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        HT1 - Xuất khẩu tăng tốc và đầu tư công được đẩy mạnh
                        giúp cải thi...
                    </div>
                    <div className={styles.flexRow}>
                        <Clock />
                        <div>10/03/2022 - 08:46</div>
                    </div>

                    <div>
                        Giá mục tiêu:{" "}
                        <span className={styles.bold}>80,100</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
