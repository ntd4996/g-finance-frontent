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
    const { isBack, title } = useSelector((state: RootState) => state.layout);
    const router = useRouter();

    return (
        <div className="w-full">
            {isBack && (
                <div className={styles.headerWithShadow}>
                    <div className={styles.back}>
                        <IconButton
                            aria-label="delete"
                            className={styles.colorButton}
                            onClick={() => {router.back()}}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        {title}
                    </div>
                    <Button
                        color="secondary"
                        variant="contained"
                        style={{
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        Login
                    </Button>
                </div>
            )}
            {!isBack && (
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="site logo"
                            width={40}
                            height={40}
                        />
                        <span>BRAND NAME</span>
                    </div>
                    <Button
                        color="secondary"
                        variant="contained"
                        style={{
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        Login
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Header;
