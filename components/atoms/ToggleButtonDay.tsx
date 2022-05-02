import React from "react";
import styles from "./ToggleButtonDay.module.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import theme from "../../libs/theme";

export default function ToggleButtonDay() {
    const [alignment, setAlignment] = React.useState<string | null>("now");

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null
    ) => {
        if (newAlignment?.length) {
            setAlignment(newAlignment);
        }
    };
    return (
        <div className={styles.page}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="day"
                sx={{
                    "& .Mui-selected": {
                        background: theme.palette.secondary.main,
                    },
                }}
            >
                <ToggleButton
                    value="now"
                    aria-label="left aligned"
                    className={styles.btn}
                    classes={{ selected: styles.btnActive }}
                >
                    Hiện tại
                </ToggleButton>
                <ToggleButton
                    value="1D"
                    aria-label="centered"
                    className={styles.btn}
                    classes={{ selected: styles.btnActive }}
                >
                    1D
                </ToggleButton>
                <ToggleButton
                    value="2D"
                    aria-label="right aligned"
                    className={styles.btn}
                    classes={{ selected: styles.btnActive }}
                >
                    2D
                </ToggleButton>
                <ToggleButton
                    value="3D"
                    aria-label="justified"
                    className={styles.btn}
                    classes={{ selected: styles.btnActive }}
                >
                    3D
                </ToggleButton>
                <ToggleButton
                    value="4D"
                    aria-label="justified"
                    className={styles.btn}
                    classes={{ selected: styles.btnActive }}
                >
                    4D
                </ToggleButton>
                <ToggleButton
                    value="5D"
                    aria-label="justified"
                    className={styles.btn}
                    classes={{ selected: styles.btnActive }}
                >
                    5D
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
