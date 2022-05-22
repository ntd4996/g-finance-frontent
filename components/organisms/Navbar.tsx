import * as React from "react";
import styles from "./Navbar.module.scss";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import theme from "../../libs/theme";
import House from "../icons/House";
import FundsLine from "../icons/FundsLine";
import SlideShow from "../icons/SlideShow";
import FolderChart from "../icons/FolderChart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { useRouter } from "next/router";
import { currentLayoutSlice } from "../../stores/layout";

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const { isShowNav } = useSelector((state: RootState) => state.layout);
    const router = useRouter();
    const { valueNav } = useSelector((state: RootState) => state.layout);
    const Dispatch = useDispatch();

    React.useEffect(() => {
        setValue(valueNav);
    }, [valueNav]);

    return (
        <div>
            {isShowNav && (
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
                                    color: (theme) =>
                                        theme.palette.secondary.main,
                                },
                        },
                    }}
                >
                    <BottomNavigationAction
                        label="Trang chủ"
                        icon={<House />}
                        onClick={() => {
                            Dispatch(
                                currentLayoutSlice.actions.updateValueNav(0)
                            );
                            router.push("/home");
                        }}
                    />

                    <BottomNavigationAction
                        label="Khuyến nghị"
                        icon={<FundsLine />}
                        onClick={() => {
                            Dispatch(
                                currentLayoutSlice.actions.updateValueNav(1)
                            );
                            router.push("/ranks");
                        }}
                    />
                    <BottomNavigationAction
                        label="Săn tin"
                        icon={<SlideShow />}
                        onClick={() => {
                            Dispatch(
                                currentLayoutSlice.actions.updateValueNav(2)
                            );
                            router.push("/findNews");
                        }}
                    />
                    <BottomNavigationAction
                        label="Danh mục"
                        icon={<FolderChart />}
                        onClick={() => {
                            Dispatch(
                                currentLayoutSlice.actions.updateValueNav(3)
                            );
                            router.push("/ahihi");
                        }}
                    />
                </BottomNavigation>
            )}
        </div>
    );
};

export default Navbar;
