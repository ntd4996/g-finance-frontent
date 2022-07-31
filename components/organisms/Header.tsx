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
import { useState } from "react";
import MenuAccountUser from "./MenuAccountUser";
import MenuAccountAdmin from "./MenuAccountAdmin";

const Header = () => {
    const {
        isBack,
        title,
        isLogin,
        isFixedHeader,
        isShowHeader,
        isShowHeaderAdmin,
        isShowButtonAdmin,
    } = useSelector((state: RootState) => state.layout);
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
            {isShowHeaderAdmin ? (
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
                                <span>ADMIN - G FINANCE</span>
                            </div>
                        </div>
                        {isShowButtonAdmin && (
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                }}
                                onClick={() => {
                                    router.push("/admin");
                                }}
                            >
                                Quay lại Admin
                            </Button>
                        )}
                    </div>
                </div>
            ) : (
                <div>
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
                                isFixedHeader
                                    ? styles.headerWithShadow
                                    : styles.header
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
                </div>
            )}
            <MenuAccountUser
                isOpenMenu={isOpenMenu}
                toggleDrawer={toggleDrawer}
                redirectPage={redirectPage}
            />
            <MenuAccountAdmin
                isOpenMenu={isOpenMenu}
                toggleDrawer={toggleDrawer}
                redirectPage={redirectPage}
            />
        </div>
    );
};

export default Header;
