import React from "react";
import styles from "./TabAccount.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { withStyles, WithStyles } from "@mui/styles";
import { Button } from "@mui/material";
import theme from "../../../libs/theme";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { currentAccountSlice } from "../../../stores/account";
import { RootState } from "../../../stores";

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
        marginTop: "16px",
    },
    tabRoot: {
        margin: "0 20px",
    },
};

function TabAccount(props: WithStyles<typeof stylesRoot>) {
    const { classes } = props;
    const { isUserVip } = useSelector((state: RootState) => state.account);
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const router = useRouter();
    const upgradeAccount = () => {
        dispatch(currentAccountSlice.actions.updateIsUserVip(true));
        router.back();
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="w-full px-8">
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
                            label="Quyền lợi VIP"
                            {...a11yProps(0)}
                            sx={{
                                padding: 0,
                            }}
                            classes={{
                                root: classes.tabRoot,
                            }}
                        />
                        <Tab
                            label="Quyền lợi Free User"
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
                    <div>
                        <div className={styles.table}>
                            <div>Xem mọi Tín hiệu Mua - Bán</div>
                            <div>Nhận Khuyến nghị danh mục tốt nhất </div>
                            <div>
                                Nhận Cảnh báo thị trường khi có Tin tức mới
                            </div>
                            <div>
                                Đăng danh mục nhận G khi danh mục của bạn lãi
                                hơn AI của hệ thống qua tính năng Top Trader
                            </div>
                            <div className={styles.special}>
                                Có được mọi quyền lợi khác của FREE User
                            </div>
                        </div>
                    </div>
                    {!isUserVip ? (
                        <div className={styles.buttonRegister}>
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                    width: "100%",
                                    height: "48px",
                                    marginBottom: "1rem",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                }}
                                onClick={upgradeAccount}
                            >
                                Đăng ký VIP User
                            </Button>
                        </div>
                    ) : (
                        ""
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={styles.tableFree}>
                        <div>
                            Xem Danh sách cổ phiếu, trừ Top xếp hạng 10 cổ phiếu
                            tốt nhất
                        </div>
                        <div>Xem thông tin chi tiết cổ phiếu </div>
                        <div>Nhận thưởng qua tính năng Share to earn G</div>
                        <div>Xem thông tin Top trader</div>
                        <div>Xem tin tức thị trường</div>
                        <div>Xem Lịch sử Tín hiệu Mua - Bán</div>
                        <div>Xem lịch sử khuyến nghị từ G Finance</div>
                    </div>
                    {!isUserVip ? (
                        <div className={styles.buttonRegister}>
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                    width: "100%",
                                    height: "48px",
                                    marginBottom: "1rem",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                }}
                                onClick={upgradeAccount}
                            >
                                Đăng ký VIP User
                            </Button>
                        </div>
                    ) : (
                        ""
                    )}
                </TabPanel>
            </div>
        </div>
    );
}

export default withStyles(stylesRoot)(TabAccount);
