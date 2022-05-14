import React from "react";
import styles from "./Banner.module.scss";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <div className={styles.name}>
                    <div>Nguyễn Văn A</div>
                    <div className={styles.vip}>VIP USER</div>
                </div>
                <div className={styles.point}>
                    1242 <span className="textOrange">G</span>
                </div>
                <div className={styles.today}>
                    <span className="textPink">Today: </span>
                    +320 <span className="textOrange">G</span>
                </div>
            </div>
        </div>
    );
}
