import React from "react";
import RanksChart from "../icons/RanksChart";
import Vote from "../icons/Vote";
import ShareToEarn from "../icons/ShareToEarn";
import styles from "./ListButton.module.scss";
import TopTrader from "../icons/TopTrader";
import Link from "next/link";

export default function ListButton() {
    return (
        <div className={styles.list}>
            <Link href="/ranks">
                <div className={styles.btn}>
                    <div className={styles.buttonRanks}>
                        <RanksChart />
                    </div>
                    Xếp hạng cổ phiếu
                </div>
            </Link>
            <Link href="/ahji">
                <div className={styles.btn}>
                    <div className={styles.buttonTop}>
                        <TopTrader />
                    </div>
                    Top trader
                </div>
            </Link>
            <Link href="/ahji">
                <div className={styles.btn}>
                    <div className={styles.buttonVote}>
                        <Vote />
                    </div>
                    Vote
                </div>
            </Link>
            <Link href="/ahji">
                <div className={styles.btn}>
                    <div className={styles.buttonShare}>
                        <ShareToEarn />
                    </div>
                    Share to earn
                </div>
            </Link>
        </div>
    );
}
