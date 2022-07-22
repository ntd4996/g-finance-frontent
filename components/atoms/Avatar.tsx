import Image from "next/image";
import React from "react";
import styles from "./Avatar.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Avatar() {
    return (
        <div className={styles.avatar}>
            <AccountCircleIcon />
        </div>
    );
}
