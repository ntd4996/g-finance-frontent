import React from "react";
import styles from "./VipUser.module.scss";
import CoverFlow from "./CoverFlow";
import TabAccount from "./TabAccount";

export default function VipUser() {
    return (
        <div className={styles.container}>
            <CoverFlow />
        </div>
    );
}
