import React, { useEffect, useState } from "react";
import styles from "./TabContainer.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import TabOverView from "./TabOverview";
import TabFinance from "./TabFinance";
import TabSignal from "./TabSignal";
import TabNewspapers from "./TabNewspapers";
import TabAnalysis from "./TabAnalysis";
import TabF319 from "./TabF319";
import { currentDetailSlice } from "../../stores/detail";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

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
const stylesRoot = {
    tabsRoot: {
        minHeight: "36px",
        height: "36px",
    },
    tabRoot: {
        width: "78px",
        minWidth: "78px",
    },
};

function TabContainer(props: any) {
    const router = useRouter();
    const dispatch = useDispatch();

    const { classes, loading, toggleButtonDay } = props;
    const { valueTab } = router.query;

    const [value, setValue] = useState(0);
    const [data, setData] = useState({} as any);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        dispatch(currentDetailSlice.actions.updateValueTab(newValue));
    };

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
    }, [props.data]);

    useEffect(() => {
        if (valueTab) {
            setValue(+valueTab);
            dispatch(currentDetailSlice.actions.updateValueTab(valueTab));
        }
    }, [valueTab]);

    return (
        <div className="w-full">
            <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className={styles.tab}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                    scrollButtons
                    selectionFollowsFocus
                    variant="scrollable"
                    classes={{
                        root: classes.tabsRoot,
                    }}
                >
                    <Tab
                        label="Tổng quan"
                        {...a11yProps(0)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                    <Tab
                        label="Tài Chính"
                        {...a11yProps(1)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                    <Tab
                        label="Tín hiệu"
                        {...a11yProps(2)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                    <Tab
                        label="Phân tích"
                        {...a11yProps(3)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                    <Tab
                        label="Báo chí"
                        {...a11yProps(4)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                    {/* <Tab
                        label="F319"
                        {...a11yProps(5)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TabOverView
                    data={data}
                    loading={loading}
                    toggleButtonDay={toggleButtonDay}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabFinance data={data} loading={loading} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabSignal data={data} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TabAnalysis />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <TabNewspapers data={data} />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <TabF319 />
            </TabPanel>
        </div>
    );
}

export default withStyles(stylesRoot)(TabContainer);
