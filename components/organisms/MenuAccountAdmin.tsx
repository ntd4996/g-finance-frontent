import React from "react";
import styles from "./MenuAccountAdmin.module.scss";
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
import { RootState } from "../../stores";
import { useSelector } from "react-redux";

interface propsType {
    isOpenMenu: boolean;
    toggleDrawer: () => void;
    redirectPage: (url: string) => void;
}

export default function MenuAccountAdmin(props: propsType) {
    const { isOpenMenu, toggleDrawer, redirectPage } = props;

    const { isShowHeaderAdmin } = useSelector(
        (state: RootState) => state.layout
    );

    return (
        <div>
            {isShowHeaderAdmin ? (
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
                                onClick={() => redirectPage("/home")}
                            >
                                <Buildings />
                                Trang chủ
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/blog")}
                            >
                                <Blog />
                                Cài đặt Blog
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/guide")}
                            >
                                <Book />
                                Cài Đặt Hướng dẫn chung
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/method")}
                            >
                                <Method />
                                Cài Đặt Phương pháp đầu tư
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/gfinance")}
                            >
                                <Document />
                                Cài Đặt Về Gfinance
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/info")}
                            >
                                <Info />
                                Cài Đặt Liên hệ
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
