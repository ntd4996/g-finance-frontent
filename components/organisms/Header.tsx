import Image from "next/image";
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import theme from "../../libs/theme";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { useRouter } from "next/router";

const Header = () => {
    const { isBack, title, isLogin, isFixedHeader, isShowHeader } = useSelector(
        (state: RootState) => state.layout
    );
    const router = useRouter();

    return (
        <div className="w-full">
            {isBack && isShowHeader && (
                <div className={styles.headerWithShadow}>
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
                                backgroundColor: theme.palette.secondary.main,
                            }}
                        >
                            Login
                        </Button>
                    )}
                </div>
            )}
            {!isBack && isShowHeader && (
                <div
                    className={
                        isFixedHeader ? styles.headerWithShadow : styles.header
                    }
                >
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="site logo"
                            width={40}
                            height={40}
                        />
                        <span>BRAND NAME</span>
                    </div>
                    {!isLogin && (
                        <Button
                            color="secondary"
                            variant="contained"
                            style={{
                                backgroundColor: theme.palette.secondary.main,
                            }}
                            onClick={() => {
                                router.push("/login");
                            }}
                        >
                            Login
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
