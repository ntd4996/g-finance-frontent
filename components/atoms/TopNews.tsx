import Image from "next/image";
import React from "react";
import Clock from "../icons/Clock";
import CardNew from "./CardNew";
import styles from "./TopNews.module.scss";
export default function TopNews() {
    return (
        <div className="pb-20">
            <div className="w-full px-5">
                <div className={styles.image}>
                    <Image
                        src="/mus.png"
                        alt="news"
                        width="100%"
                        height="128px"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={styles.title}>
                    Elon Musk bị cựu cổ đông Twitter kiện vì chậm công bố thông
                    tin
                </div>
                <div className={styles.flexRow}>
                    <div className="flex gap-2 justify-center">
                        <Clock /> 10/03/2022 - 08:46
                    </div>
                    <div>
                        Nguồn:<span className={styles.textBlack}> CafeF</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis....
                </div>
            </div>
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
        </div>
    );
}
