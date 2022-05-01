import * as React from "react";
import styles from "./Navbar.module.scss";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../../libs/theme";
import House from "../icons/House";
import FundsLine from "../icons/FundsLine";
import SlideShow from "../icons/SlideShow";
import FolderChart from "../icons/FolderChart";

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                color="secondary"
                className={styles.withShadow}
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    svg: {
                        fill: "#989C9B",
                    },
                    "& .Mui-selected": {
                        borderTop: `3px solid ${theme.palette.secondary.main}`,
                        svg: {
                            fill: (theme) => theme.palette.secondary.main,
                        },
                        "& .MuiBottomNavigationAction-label": {
                            fontSize: "10px",
                            transition: "none",
                            fontWeight: 500,
                            lineHeight: "12px",
                            border: "unset",
                            paddingTop: "4px",
                        },
                        "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label":
                            {
                                color: (theme) => theme.palette.secondary.main,
                            },
                    },
                }}
            >
                <BottomNavigationAction label="Trang chủ" icon={<House />} />
                <BottomNavigationAction
                    label="Khuyến nghị"
                    icon={<FundsLine />}
                />
                <BottomNavigationAction label="Săn tin" icon={<SlideShow />} />
                <BottomNavigationAction
                    label="Danh mục"
                    icon={<FolderChart />}
                />
            </BottomNavigation>
        </div>
    );
};

export default Navbar;
