import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLayoutSlice } from "../../stores/layout";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import theme from "../../libs/theme";
import Bitcoin from "../../components/pages/psychology/Bitcoin";
import Share from "../../components/pages/psychology/Share";

export default function Psychology() {
    const dispatch = useDispatch();

    useEffect(() => {
        changeLayoutState();
    }, []);

    const changeLayoutState = () => {
        dispatch(currentLayoutSlice.actions.updateIsBack(true));
        dispatch(currentLayoutSlice.actions.updateIsLogin(true));
        dispatch(currentLayoutSlice.actions.updateIsShowNav(false));
        dispatch(
            currentLayoutSlice.actions.updateTitle(
                "Tâm lý thị trường & Phán đoán"
            )
        );
        dispatch(currentLayoutSlice.actions.updateIsShowHeader(true));
    };

    const [alignment, setAlignment] = React.useState("bitcoin");

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null
    ) => {
        if (newAlignment?.length) {
            setAlignment(newAlignment);
        }
    };

    return (
        <div className="pagePaddingTop bg-white">
            <div className="flex items-center w-100 justify-center pt-5 mb-7 relative z-10">
                <ToggleButtonGroup
                    color="secondary"
                    value={alignment}
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
                        value={"bitcoin"}
                        sx={{
                            width: "96px",
                            height: "32px",
                            borderRadius: "8px !important",
                            border: "0",
                            "&.Mui-selected, &.Mui-selected:hover": {
                                background: theme.palette.secondary.main,
                                color: "#F8F8F8",
                            },
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: "700",
                            fontSize: "14px",
                            textTransform: "capitalize",
                        }}
                    >
                        Bitcoin
                    </ToggleButton>
                    <ToggleButton
                        value={"bitcoin2"}
                        sx={{
                            width: "96px",
                            height: "32px",
                            borderRadius: "8px !important",
                            border: "0",
                            "&.Mui-selected, &.Mui-selected:hover": {
                                background: theme.palette.secondary.main,
                                color: "#F8F8F8",
                            },
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: "700",
                            fontSize: "14px",
                            textTransform: "capitalize",
                        }}
                    >
                        Cổ phiếu
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {alignment === "bitcoin" && <Bitcoin />}
            {alignment !== "bitcoin" && <Share />}
        </div>
    );
}
