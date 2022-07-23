import Image from "next/image";
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import theme from "../../libs/theme";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { useRouter } from "next/router";
import HamburgerButton from "../icons/HamburgerButton";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
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

const Header = () => {
    const { isBack, title, isLogin, isFixedHeader, isShowHeader } = useSelector(
        (state: RootState) => state.layout
    );
    const router = useRouter();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const toggleDrawer = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    const redirectPage = (url: string) => {
        toggleDrawer();
        router.push(url);
    };

    return (
        <div className="w-full">
            {isBack && isShowHeader && (
                <div className={styles.headerWithShadow}>
                    <div className={styles.contentHeader}>
                        <div className={styles.back}>
                            <IconButton
                                aria-label="delete"
                                className={styles.colorButton}
                                onClick={() => {
                                    router.back();
                                }}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                            <span>{title}</span>
                        </div>
                        {!isLogin && (
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                }}
                            >
                                Login
                            </Button>
                        )}
                    </div>
                </div>
            )}
            {!isBack && isShowHeader && (
                <div
                    className={
                        isFixedHeader ? styles.headerWithShadow : styles.header
                    }
                >
                    <div className={styles.contentHeader}>
                        <div className={styles.flexLogo}>
                            <div
                                className={styles.hamburgerButton}
                                onClick={() => toggleDrawer()}
                            >
                                <HamburgerButton />
                            </div>
                            <div
                                className={styles.logo}
                                onClick={() => {
                                    router.push("/home");
                                }}
                            >
                                <Image
                                    src="/logo.png"
                                    alt="site logo"
                                    width={40}
                                    height={40}
                                />
                                <span>G FINANCE</span>
                            </div>
                        </div>

                        {!isLogin && (
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                }}
                                onClick={() => {
                                    router.push("/login");
                                }}
                            >
                                Login
                            </Button>
                        )}
                    </div>
                </div>
            )}
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
                            onClick={() => redirectPage("/ranks")}
                        >
                            <Heart />
                            Tâm lý thị trường & phán đoán
                        </div>
                        <div
                            className={styles.content}
                            onClick={() => redirectPage("/psychology")}
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
        </div>
    );
};

export default Header;
