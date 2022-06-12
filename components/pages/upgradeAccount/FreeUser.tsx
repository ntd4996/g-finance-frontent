import React from "react";
import styles from "./FreeUser.module.scss";

export default function FreeUser() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>Quyền lợi FREE User</span>
            </div>
            <div className={styles.table}>
                <div>
                    Xem Danh sách cổ phiếu, trừ Top xếp hạng 10 cổ phiếu tốt
                    nhất
                </div>
                <div>Xem thông tin chi tiết cổ phiếu </div>
                <div>Nhận thưởng qua tính năng Share to earn G</div>
                <div>Xem thông tin Top trader</div>
                <div>Xem tin tức thị trường</div>
                <div>Xem Lịch sử Tín hiệu Mua - Bán</div>
                <div>Xem lịch sử khuyến nghị từ G Finance</div>
            </div>
        </div>
    );
}
