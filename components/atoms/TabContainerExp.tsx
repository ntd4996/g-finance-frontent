import React, { useEffect } from "react";
import styles from "./TabContainerNew.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { withStyles, WithStyles } from "@mui/styles";
import CardNew from "./CardNew";
import TopNews from "./TopNews";
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

function TabContainerExp(props: WithStyles<typeof stylesRoot>) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const router = useRouter();
    const { tab } = router.query;

    useEffect(() => {
        if (tab) {
            switch (tab) {
                case "guide":
                    setValue(0);
                    break;

                case "method":
                    setValue(1);
                    break;

                default:
                    break;
            }
        }
    }, [tab]);

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
                    variant="fullWidth"
                    classes={{
                        root: classes.tabsRoot,
                    }}
                >
                    <Tab
                        label="Hưỡng dân chung"
                        {...a11yProps(0)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                    <Tab
                        label="Phương pháp đầu tư"
                        {...a11yProps(1)}
                        sx={{
                            padding: 0,
                        }}
                        classes={{
                            root: classes.tabRoot,
                        }}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="pb-20">
                    <div className={styles.textComingSoon}>Coming soon...</div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="pb-20">
                    <div className={styles.textComingSoon}>Coming soon...</div>
                </div>
            </TabPanel>
        </div>
    );
}

export default withStyles(stylesRoot)(TabContainerExp);
