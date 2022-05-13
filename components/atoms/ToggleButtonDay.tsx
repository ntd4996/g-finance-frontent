import React from "react";
import styles from "./ToggleButtonDay.module.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
            >
                <ToggleButton
                    value="now"
                    aria-label="left aligned"
                    classes={{
                        root: styles.buttons,
                        selected: styles.buttonsSelected,
                    }}
                >
                    Hiện tại
                </ToggleButton>
                <ToggleButton
                    value="1D"
                    aria-label="centered"
                    classes={{
                        root: styles.buttons,
                        selected: styles.buttonsSelected,
                    }}
                >
                    1D
                </ToggleButton>
                <ToggleButton
                    value="2D"
                    aria-label="right aligned"
                    classes={{
                        root: styles.buttons,
                        selected: styles.buttonsSelected,
                    }}
                >
                    2D
                </ToggleButton>
                <ToggleButton
                    value="3D"
                    aria-label="justified"
                    classes={{
                        root: styles.buttons,
                        selected: styles.buttonsSelected,
                    }}
                >
                    3D
                </ToggleButton>
                <ToggleButton
                    value="4D"
                    aria-label="justified"
                    classes={{
                        root: styles.buttons,
                        selected: styles.buttonsSelected,
                    }}
                >
                    4D
                </ToggleButton>
                <ToggleButton
                    value="5D"
                    aria-label="justified"
                    classes={{
                        root: styles.buttons,
                        selected: styles.buttonsSelected,
                    }}
                >
                    5D
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
