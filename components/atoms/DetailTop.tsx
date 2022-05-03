import React from "react";
import Chart from "../icons/Chart";
import Plus from "../icons/Plus";
import styles from "./DetailTop.module.scss";

export default function DetailTop() {
    return (
        <div className={styles.container}>
            <div className={styles.flexRow}>
                <div className={styles.numberLabel}>
                    <div>
                        <span className={styles.number}>94</span> Điểm
                    </div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.textGreen}>32.50 (5.2%)</div>
                    <div>Vol: 481,580 (154.5%)</div>
                </div>
            </div>

            <div className={styles.flexColRight}>
                <div className={styles.flexRow}>
                    <Chart />
                    <Plus />
                </div>
                04/04/2022
            </div>
        </div>
    );
}
