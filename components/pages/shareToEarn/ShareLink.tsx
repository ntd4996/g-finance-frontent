import React from "react";
import Facebook from "../../icons/Facebook";
import Titter from "../../icons/Titter";
import Linkedin from "../../icons/Linkedin";
import styles from "./ShareLink.module.scss";
import Telegram from "../../icons/Telegram";

export default function ShareLink() {
    return (
        <div className={styles.shareLink}>
            Share via: <Facebook /> <Titter /> <Linkedin /> <Telegram />
        </div>
    );
}
