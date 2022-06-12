import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import theme from "../../libs/theme";
import FreeUser from "../../components/pages/upgradeAccount/FreeUser";
import VipUser from "../../components/pages/upgradeAccount/VipUser";

export default function UpgradeAccount() {
    const dispatch = useDispatch();
    const [type, setType] = React.useState("vip");

    useEffect(() => {
        changeLayoutState();
    }, []);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null
    ) => {
        if (newAlignment?.length) {
            setType(newAlignment);
        }
    };

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(
            currentLayoutSlice.actions.updateTitle("Đăng ký tài khoản VIP")
        );
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
    };
    return (
        <div className="pagePaddingTop bg-white">
            <div className="flex items-center w-100 justify-center pt-5 mb-7 relative z-10">
                <ToggleButtonGroup
                    color="secondary"
                    value={type}
                    exclusive
                    onChange={handleChange}
                    sx={{
                        "& .Mui-selected": {
                            background: theme.palette.secondary.main,
                        },
                        background: "#F8F8F8",
                        borderRadius: "8px !important",
                        padding: "4px",
                        fontSize: "14px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ToggleButton
                        value={"vip"}
                        sx={{
                            width: "96px",
                            height: "32px",
                            borderRadius: "8px !important",
                            border: "0",
                            "&.Mui-selected, &.Mui-selected:hover": {
                                background: theme.palette.secondary.main,
                                color: "#F8F8F8",
                            },
                            fontFamily: "'Manrope', sans-serif !important",
                            fontWeight: "700",
                            fontSize: "14px",
                            textTransform: "capitalize",
                        }}
                    >
                        VIP User
                    </ToggleButton>
                    <ToggleButton
                        value={"free"}
                        sx={{
                            width: "96px",
                            height: "32px",
                            borderRadius: "8px !important",
                            border: "0",
                            "&.Mui-selected, &.Mui-selected:hover": {
                                background: theme.palette.secondary.main,
                                color: "#F8F8F8",
                            },
                            fontFamily: "'Manrope', sans-serif !important",
                            fontWeight: "700",
                            fontSize: "14px",
                            textTransform: "capitalize",
                        }}
                    >
                        FREE User
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {type === "vip" && <VipUser />}
            {type !== "vip" && <FreeUser />}
        </div>
    );
}
