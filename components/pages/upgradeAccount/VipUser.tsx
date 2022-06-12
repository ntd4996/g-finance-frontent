import React from "react";
import { Button } from "@mui/material";
import theme from "../../../libs/theme";
import styles from "./VipUser.module.scss";
import CoverFlow from "./CoverFlow";
import { currentAccountSlice } from "../../../stores/account";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function VipUser() {
    const dispatch = useDispatch();
    const router = useRouter();

    const upgradeAccount = () => {
        dispatch(currentAccountSlice.actions.updateIsUserVip(true));
        router.back()
    };

    return (
        <div className={styles.container}>
            <CoverFlow />
            <div className={styles.title}>
                <span>Quyền lợi VIP User</span>
            </div>
            <div className={styles.table}>
                <div>Xem mọi Tín hiệu Mua - Bán</div>
                <div>Nhận Khuyến nghị danh mục tốt nhất </div>
                <div>Nhận Cảnh báo thị trường khi có Tin tức mới</div>
                <div>
                    Đăng danh mục nhận G khi danh mục của bạn lãi hơn AI của hệ
                    thống qua tính năng Top Trader
                </div>
                <div>Có được mọi quyền lợi khác của FREE User</div>
            </div>
            <Button
                color="secondary"
                variant="contained"
                style={{
                    backgroundColor: theme.palette.secondary.main,
                    width: "100%",
                    height: "48px",
                    marginBottom: "1rem",
                    borderRadius: "8px",
                    fontSize: "14px",
                }}
                onClick={upgradeAccount}
            >
                Đăng ký VIP User
            </Button>
        </div>
    );
}
