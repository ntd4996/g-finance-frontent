import React from "react";
import ChartGauge from "./ChartGauge";
import ChartLine from "./ChartLine";
import styles from "./Bitcoin.module.scss";
import theme from "../../../libs/theme";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ArrowUp from "./../../icons/ArrowUp";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Question from "./../../icons/Question";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function Bitcoin() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [alignment, setAlignment] = React.useState<string | null>("7d");

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null
    ) => {
        if (newAlignment?.length) {
            setAlignment(newAlignment);
        }
    };
    return (
        <div className="px-5 w-full">
            <ChartGauge />
            <div className={styles.divBox}>
                <div className="flex flex-col">
                    <span>Tâm lý nhà đầu tư:</span>
                    <span className={styles.colorOrange}>SỢ HÃI TỘT ĐỘ</span>
                </div>
                <div>
                    <Button
                        color="secondary"
                        variant="contained"
                        style={{
                            backgroundColor: theme.palette.secondary.main,
                        }}
                        className={styles.btn}
                    >
                        Historical Value
                    </Button>
                </div>
            </div>
            <div>
                <div className={styles.title}>
                    Crypto Fear & Greed Index Over Time
                </div>
                <div className={styles.divButtonToggle}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="day"
                    >
                        <ToggleButton
                            value="7d"
                            aria-label="left aligned"
                            classes={{
                                root: styles.buttons,
                                selected: styles.buttonsSelected,
                            }}
                        >
                            7 days
                        </ToggleButton>
                        <ToggleButton
                            value="1m"
                            aria-label="right aligned"
                            classes={{
                                root: styles.buttons,
                                selected: styles.buttonsSelected,
                            }}
                        >
                            1 month
                        </ToggleButton>
                        <ToggleButton
                            value="3m"
                            aria-label="justified"
                            classes={{
                                root: styles.buttons,
                                selected: styles.buttonsSelected,
                            }}
                        >
                            3 month
                        </ToggleButton>
                        <ToggleButton
                            value="1y"
                            aria-label="justified"
                            classes={{
                                root: styles.buttons,
                                selected: styles.buttonsSelected,
                            }}
                        >
                            1 year
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>

            <div>
                <ChartLine />
            </div>

            <div>
                <div className={styles.title}>Bitcoin (BTC)</div>
                <div className={styles.divFlex}>
                    <div className="flex flex-col">
                        <span className={styles.numberTitle}>43.248</span>
                        <span className={styles.numberGreen}>
                            <ArrowUp />
                            1.54 (2.35%)
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className={styles.mass}>Khối lượng</span>
                        <span className={styles.number}>19.242.364</span>
                    </div>
                </div>
            </div>

            <div>
                <Box
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    className={styles.tab}
                >
                    <Tabs
                        centered={true}
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        textColor="secondary"
                        indicatorColor="secondary"
                        scrollButtons
                        selectionFollowsFocus
                        classes={{
                            root: styles.tabsRoot,
                        }}
                    >
                        <Tab
                            label="Khuyến nghị"
                            {...a11yProps(0)}
                            sx={{
                                padding: 0,
                                textTransform: "capitalize !important",
                                marginRight: "50px",
                            }}
                            classes={{
                                root: styles.tabRoot,
                            }}
                            icon={<div className={styles.tag}>VIP</div>}
                        />
                        <Tab
                            label="Lịch sử khuyến nghị"
                            {...a11yProps(1)}
                            sx={{
                                padding: 0,
                                textTransform: "capitalize !important",
                            }}
                            classes={{
                                root: styles.tabRoot,
                            }}
                            icon={<div></div>}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className={styles.tabPanel}>
                        <div className={styles.divTabPanel}>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Thời gian:</span>
                                    <span>12/04/2022 - 14:25:23</span>
                                </div>
                                <div>
                                    <Question />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Xác suất tăng:
                                        <span className="textGreen">64%</span>
                                    </span>
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">
                                        Xác suất giảm:
                                        <span className="textRed">64%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Mua:</span>
                                    ...
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Bán:</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Phân bổ vốn:
                                    </span>
                                    20%
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Stoploss::</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Tín hiệu:</span>
                                    ...
                                </div>
                            </div>
                        </div>
                        <div className={styles.divTabPanel}>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Thời gian:</span>
                                    <span>12/04/2022 - 14:25:23</span>
                                </div>
                                <div>
                                    <Question />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Xác suất tăng:
                                        <span className="textGreen">64%</span>
                                    </span>
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">
                                        Xác suất giảm:
                                        <span className="textRed">64%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Mua:</span>
                                    ...
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Bán:</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Phân bổ vốn:
                                    </span>
                                    20%
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Stoploss::</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Tín hiệu:</span>
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={styles.tabPanel}>
                        <div className={styles.divTabPanel}>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Thời gian:</span>
                                    <span>12/04/2022 - 14:25:23</span>
                                </div>
                                <div>
                                    <Question />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Xác suất tăng:
                                        <span className="textGreen">64%</span>
                                    </span>
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">
                                        Xác suất giảm:
                                        <span className="textRed">64%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Mua:</span>
                                    ...
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Bán:</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Phân bổ vốn:
                                    </span>
                                    20%
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Stoploss::</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Tín hiệu:</span>
                                    ...
                                </div>
                            </div>
                        </div>
                        <div className={styles.divTabPanel}>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Thời gian:</span>
                                    <span>12/04/2022 - 14:25:23</span>
                                </div>
                                <div>
                                    <Question />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Xác suất tăng:
                                        <span className="textGreen">64%</span>
                                    </span>
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">
                                        Xác suất giảm:
                                        <span className="textRed">64%</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Mua:</span>
                                    ...
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Bán:</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">
                                        Phân bổ vốn:
                                    </span>
                                    20%
                                </div>
                                <div className={styles.w_38p}>
                                    <span className="textGray">Stoploss::</span>
                                    ...
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <span className="textGray">Tín hiệu:</span>
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}

export default Bitcoin;
