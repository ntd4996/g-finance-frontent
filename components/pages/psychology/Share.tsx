import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./Share.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    Slide,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
} from "@mui/material";
import ChartGaugeShare from "./ChartGaugeShare";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Question from "../../icons/Question";
import { Box } from "@mui/system";
import ArrowDown from "../../icons/ArrowDown";
import ArrowRight from "../../icons/ArrowRight";
import { TransitionProps } from "@mui/material/transitions";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";

function createData(name: string, carbs: number, protein: string) {
    return { name, carbs, protein };
}

const rows = [
    createData("MBB", 24, "Mua"),
    createData("MBB", 24, "Bán"),
    createData("MBB", 24, "Trung lập"),
    createData("MACD Histogram (12,26,9)", 24, "Mua"),
    createData("Ichimoku Kijun (9,26,52,26)", 24, "Mua"),
    createData("Ichimoku Tenkan (9,26,52,26)", 24, "Bán"),
    createData("MBB", 24, "Trung lập"),
    createData("MACD Histogram (12,26,9)", 24, "Mua"),
];

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

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Share() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="px-5 w-full">
            <TextField
                label="Nhập mã cổ phiếu"
                id="outlined-size-normal"
                color="secondary"
                className={styles.inputSearch}
                placeholder="Nhập mã cổ phiếu"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <div className={styles.title}>
                HAG - Công ty CP Hoàng Anh Gia Lai
            </div>
            <div className={styles.containerChart}>
                <div className={styles.divChart}>
                    <ChartGaugeShare />
                </div>
            </div>
            <div>
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
                            Ngắn hạn
                        </ToggleButton>
                        <ToggleButton
                            value="1m"
                            aria-label="right aligned"
                            classes={{
                                root: styles.buttons,
                                selected: styles.buttonsSelected,
                            }}
                        >
                            Dài hạn
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell align="left" width={"60%"}>
                                        <div className={styles.name}>
                                            {row.name}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className={styles.numberLabel}>
                                            {row.carbs}
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <div
                                            className={
                                                row.protein === "Mua"
                                                    ? "textGreen"
                                                    : row.protein === "Bán"
                                                    ? "textRed"
                                                    : "textMiddle"
                                            }
                                        >
                                            {row.protein}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div>
                <div className="flex justify-between">
                    <div className={styles.title}>Giá HAG ngày 12/04/2022</div>
                    <span
                        onClick={handleClickOpen}
                        className="flex justify-center items-center gap-3 textSecondary"
                    >
                        Chi tiết <ArrowRight />
                    </span>
                </div>
                <div className={styles.divFlex}>
                    <div className="flex flex-col">
                        <span className={styles.numberTitle}>43.248</span>
                        <span className={styles.numberRed}>
                            <ArrowDown />
                            1.54 (2.35%)
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className={styles.mass}>Khối lượng</span>
                        <span className={styles.numberMass}>19.242.364</span>
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                classes={{ paper: styles.paper }}
            >
                <DialogTitle
                    sx={{
                        borderBottom: "1px solid #8c8c8c",
                        padding: "8px",
                    }}
                >
                    <div className={styles.titleModal}>
                        <div>Chi tiết nhận định</div>
                        <div className=" absolute right-0">
                            <ClearIcon onClick={handleClose} />
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ padding: "0" }}>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className={styles.contentDialog}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam eu turpis molestie, dictum est a, mattis
                            tellus. Sed dignissim, metus nec fringilla accumsan,
                            risus sem sollicitudin lacus, ut interdum tellus
                            elit sed risus. Maecenas eget condimentum velit, sit
                            amet feugiat lectus. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos. Praesent auctor purus luctus enim
                            egestas, ac scelerisque ante pulvinar. Donec ut
                            rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                            urna. Curabitur vel bibendum lorem. Morbi convallis
                            convallis diam sit amet lacinia. Aliquam in
                            elementum tellus.
                        </p>

                        <div>
                            Link:{" "}
                            <a href="" className={styles.link}>
                                https://twitter.com/suspendisse/cacinia
                            </a>
                        </div>
						<div>
                            Link:{" "}
                            <a href="" className={styles.link}>
                                https://twitter.com/suspendisse/cacinia
                            </a>
                        </div>
						<div>
                            Link:{" "}
                            <a href="" className={styles.link}>
                                https://twitter.com/suspendisse/cacinia
                            </a>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
