import React from "react";
import styles from "./InputCopied.module.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function InputCopied() {
    return (
        <div className={styles.input}>
            <div className={styles.content}>
                Link: gfinance.com/ref?=1245464657
                <ContentCopyIcon color="primary"/>
            </div>
        </div>
    );
}
