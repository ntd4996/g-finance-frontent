import React, { useEffect, useState } from "react";
import PawnChess from "../../icons/PawnChess";
import QueenChess from "../../icons/QueenChess";
import styles from "./Banner.module.scss";
import dayjs from "dayjs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";

export default function Banner() {
    const { isUserVip } = useSelector((state: RootState) => state.account);

    return (
        <div className={styles.banner}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <div className={styles.name}>
                    <div>Nguyễn Văn A</div>
                    {isUserVip && <div className={styles.vip}>VIP USER</div>}
                </div>
                <div className={styles.point}>
                    1242 <span className="textOrange">G</span>
                </div>
                <div className={styles.today}>
                    <span className="textPink">Today: </span>
                    +320 <span className="textOrange">G</span>
                </div>
                <div className={styles.upgrade}>
                    {!isUserVip ? (
                        <Link href="/upgradeAccount">
                            <div className="cursor-pointer">
                                <PawnChess />
                            </div>
                        </Link>
                    ) : (
                        <Link href="/upgradeAccount">
                            <div className="cursor-pointer">
                                <QueenChess />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
