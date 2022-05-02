import React from "react";
import styles from "./CardButton.module.scss";
import ChartButton from "./ChartButton";

export default function CardButton() {
    return (
        <div className={styles.CardButton}>
            <div className={styles.card}>
                <div className={styles.topCard}>
                    <div className={styles.title}>HPG</div>
                    <div className={styles.numberLabel}>95</div>
                </div>
                <div className={styles.bottomCard}>
                    <div className={styles.flexCol}>
                        <span>12.532</span>
                        <span>1.132.542.000</span>
                    </div>
                </div>
                <div className={styles.positionChart}>
                    <div className={styles.chard}>
                        <ChartButton />
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.topCard}>
                    <div className={styles.title}>VCB</div>
                    <div className={styles.numberLabel}>93</div>
                </div>
                <div className={styles.bottomCard}>
                    <div className={styles.flexCol}>
                        <span>12.532</span>
                        <span>1.132.542.000</span>
                    </div>
                </div>
                <div className={styles.positionChart}>
                    <div className={styles.chard}>
                        <ChartButton />
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.topCard}>
                    <div className={styles.title}>ACB</div>
                    <div className={styles.numberLabel}>91</div>
                </div>
                <div className={styles.bottomCard}>
                    <div className={styles.flexCol}>
                        <span>12.532</span>
                        <span>1.132.542.000</span>
                    </div>
                </div>
                <div className={styles.positionChart}>
                    <div className={styles.chard}>
                        <ChartButton />
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.topCard}>
                    <div className={styles.title}>MBB</div>
                    <div className={styles.numberLabel}>90</div>
                </div>
                <div className={styles.bottomCard}>
                    <div className={styles.flexCol}>
                        <span>12.532</span>
                        <span>1.132.542.000</span>
                    </div>
                </div>
                <div className={styles.positionChart}>
                    <div className={styles.chard}>
                        <ChartButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
