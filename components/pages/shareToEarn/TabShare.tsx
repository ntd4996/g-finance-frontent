import React from "react";
import styles from "./TabShare.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { withStyles, WithStyles } from "@mui/styles";
import TableShare from "./TableShare";

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
		marginRight: '50px'
    },
};

function TabShare(props: WithStyles<typeof stylesRoot>) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
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
						centered={true}
                        classes={{
                            root: classes.tabsRoot,
                        }}
                    >
                        <Tab
                            label="Danh sách giới thiệu"
                            {...a11yProps(0)}
                            sx={{
                                padding: 0,
                            }}
                            classes={{
                                root: classes.tabRoot,
                            }}
                        />
                        <Tab
                            label="Lịch sử"
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
                    <TableShare/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TableShare/>
                </TabPanel>
            </div>
        </div>
    );
}
export default withStyles(stylesRoot)(TabShare);
