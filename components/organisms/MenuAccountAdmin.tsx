import React from "react";
import styles from "./MenuAccountAdmin.module.scss";
import Notification from "../icons/Notification";
import Avatar from "../atoms/Avatar";
import Logout from "../icons/Logout";
import Buildings from "../icons/Buildings";
import Document from "../icons/Document";
import Info from "../icons/Info";
import Method from "../icons/Method";
import Book from "../icons/Book";
import Blog from "../icons/Blog";
import Drawer from "@mui/material/Drawer";
import { RootState } from "../../stores";
import { useSelector } from "react-redux";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

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
                                onClick={() => redirectPage("admin/blog")}
                            >
                                <Blog />
                                Quản Lý Blog
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/guide")}
                            >
                                <Book />
                                Quản Lý Hướng dẫn chung
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/method")}
                            >
                                <Method />
                                Quản Lý Phương pháp đầu tư
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/gfinance")}
                            >
                                <Document />
                                Quản Lý Về Gfinance
                            </div>
                            <div
                                className={styles.content}
                                onClick={() => redirectPage("admin/info")}
                            >
                                <Info />
                                Quản Lý Liên hệ
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
