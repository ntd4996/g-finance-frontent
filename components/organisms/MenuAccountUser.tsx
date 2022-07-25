import React from "react";
import styles from "./MenuAccountUser.module.scss";
import Notification from "../icons/Notification";
import Avatar from "../atoms/Avatar";
import Logout from "../icons/Logout";
import Buildings from "../icons/Buildings";
import Document from "../icons/Document";
import Filter from "../icons/Filter";
import Info from "../icons/Info";
import Heart from "../icons/Heart";
import Finance from "../icons/Finance";
import Method from "../icons/Method";
import Book from "../icons/Book";
import Blog from "../icons/Blog";
import News from "../icons/News";
import Ranks from "../icons/Ranks";
import Drawer from "@mui/material/Drawer";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

interface propsType {
    isOpenMenu: boolean;
    toggleDrawer: () => void;
    redirectPage: (url: string) => void;
}

export default function MenuAccountUser(props: propsType) {
    const { isOpenMenu, toggleDrawer, redirectPage } = props;

    const { isShowHeaderAdmin } = useSelector(
        (state: RootState) => state.layout
    );

    return (
        <div>
            {!isShowHeaderAdmin ? (
                <Drawer
                    anchor="left"
                    open={isOpenMenu}
                    onClose={() => toggleDrawer()}
                >
                    <div className={styles.drawer}>
                        <div className={styles.top}>
                            <div className={styles.avatar}>
                                <Avatar />
                                Username101
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => redirectPage("/user")}
                            >
                                <Notification />
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/admin")}
                            >
                                <AdminPanelSettingsOutlinedIcon
                                    fontSize="large"
                                    color="secondary"
                                />
                                Admin
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/home")}
                            >
                                <Buildings />
                                Trang chủ
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/favorite")}
                            >
                                <Document />
                                Danh mục theo dõi
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/filter")}
                            >
                                <Filter />
                                Bộ lọc
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/ranks")}
                            >
                                <Ranks />
                                Xếp hạng cổ phiếu
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/psychology")}
                            >
                                <Heart />
                                Tâm lý thị trường & phán đoán
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/findNews")}
                            >
                                <News />
                                Săn tin
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/top")}
                            >
                                <Finance />
                                Top Trader
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/blog")}
                            >
                                <Blog />
                                Blog
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/exp?tab=guide")}
                            >
                                <Book />
                                Hướng dẫn chung
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/exp?tab=method")}
                            >
                                <Method />
                                Phương pháp đầu tư
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/gfinance")}
                            >
                                <Document />
                                Về Gfinance
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("/info")}
                            >
                                <Info />
                                Liên hệ
                            </div>
                        </div>
                        <div
                            className={styles.bottom}
                            onClick={() => redirectPage("/login")}
                        >
                            <Logout /> Đăng xuất
                        </div>
                    </div>
                </Drawer>
            ) : (
                <></>
            )}
        </div>
    );
}
