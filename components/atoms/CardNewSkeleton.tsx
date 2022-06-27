import React from "react";
import styles from "./CardNew.module.scss";
import Clock from "../icons/Clock";
import Link from "next/link";
import { Skeleton } from "@mui/material";

export default function CardNewSkeleton() {
    return (
        <Link href="/findNews/detail/id">
            <div className={styles.cardNew}>
                <Skeleton
                    variant="rectangular"
                    className={styles.imageSkeleton}
                />
                <div className={styles.info}>
                    <div className={styles.title}>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
