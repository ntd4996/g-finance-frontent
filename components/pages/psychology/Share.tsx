import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Share.module.scss";
import moment from 'moment';

import {
    Autocomplete,
    Box,
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
// import { Box } from "@mui/system";
import ArrowDown from "../../icons/ArrowDown";
import ArrowRight from "../../icons/ArrowRight";
import { TransitionProps } from "@mui/material/transitions";
import ClearIcon from "@mui/icons-material/Clear";
import TicketServer from "../../../services/ticket";

function createData(name: string, carbs: number, protein: string) {
    return { name, carbs, protein };
}

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
    const [open, setOpen] = useState(false);
    const [ticker, setTicker] = useState<any>({ component: 'HAG', name: 'Công ty CP Hoàng Anh Gia Lai', lastUpdate: '' });
    const [tickerlDetai, setTickerDetail] = useState<any>({});
    const [tickers, setTickers] = useState<any[]>([]);
    const fetAllTickers = async () => {
        await TicketServer.listTicket({ size: -1 })
            .then((result) => {
                if (result?.data?.data) {
                    setTickers(result.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetAllTickers();
    }, []);

    useEffect(() => {
        const loadTicker = async () => {
            await TicketServer.detailTicket({ id: ticker?.component })
                .then((result) => {
                    if (result?.data?.data) {
                        setTickerDetail(result.data.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });

        }
        loadTicker();
    }, [ticker]);

    useEffect(() => {
        if (!tickers.length) {
            return;
        }

        for (const tk of tickers) {
            if (tk?.component == 'HAG') {
                setTicker(tk);
                return;
            }
        }
        setTicker(tickers[0]);
    }, [tickers.length])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [alignment, setAlignment] = useState<string>("shortSignal");
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
            {/* <TextField
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
            /> */}
            <Autocomplete
                value={ticker}
                id="outlined-size-normal"
                color="secondary"
                onChange={(event, newValue) => {
                    setTicker(newValue);
                }}
                className={styles.inputSearch}
                sx={{ width: '100%' }}
                options={tickers}
                autoHighlight
                getOptionLabel={(option) => `${option.component} - ${option.name}`}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option.component} - {option.name}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Nhập mã cổ phiếu"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
            {/* <div className={styles.title}>
                {ticker?.component} - {ticker?.name}
            </div> */}
            <div className={styles.containerChart}>
                <div className={styles.divChart}>
                    <ChartGaugeShare signal={tickerlDetai[alignment]} />
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
                            value="shortSignal"
                            aria-label="left aligned"
                            classes={{
                                root: styles.buttons,
                                selected: styles.buttonsSelected,
                            }}
                        >
                            Ngắn hạn
                        </ToggleButton>
                        <ToggleButton
                            value="longSignal"
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
                            {(tickerlDetai[alignment]?.indicators || []).map((row: any, index: any) => (
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
                                            {row.indicatorName}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className={styles.numberLabel}>
                                            {row.latestValue}
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <div
                                            className={
                                                row.signal === "buy"
                                                    ? "textGreen"
                                                    : row.signal === "sell"
                                                        ? "textRed"
                                                        : "textMiddle"
                                            }
                                        >
                                            {row.signal === 'sell' ? 'Bán' : row.signal === 'buy' ? 'Mua' : 'Trung lập'}
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
                    <div className={styles.title}>Giá {ticker?.component} ngày {moment(tickerlDetai.lastUpdate).format('DD/MM/YYYY')}</div>
                    <span
                        onClick={handleClickOpen}
                        className="flex justify-center items-center gap-3 textSecondary"
                    >
                        Chi tiết <ArrowRight />
                    </span>
                </div>
                <div className={styles.divFlex}>
                    <div className="flex flex-col">
                        <span className={styles.numberTitle}>{(tickerlDetai?.costPrice || 0).toLocaleString('en-US', { minimumFractionDigits: 0 })}</span>
                        {/* <span className={styles.numberRed}>
                            <ArrowDown />
                            1.54 (2.35%)
                        </span> */}
                    </div>
                    <div className="flex flex-col">
                        <span className={styles.mass}>Khối lượng</span>
                        <span className={styles.numberMass}>{(tickerlDetai?.volume || 0).toLocaleString('en-US', { minimumFractionDigits: 0 })}</span>
                    </div>
                </div>
            </div>

            <div>
                <Box
                    sx={{ borderBottom: 1, borderColor: "#a5a4a4cc" }}
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
                        <div className={styles.textComingSoon}>
                            Coming soon...
                        </div>
                        {/* <div className={styles.divTabPanel}>
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
                        </div> */}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={styles.tabPanel}>
                        <div className={styles.textComingSoon}>
                            Coming soon...
                        </div>
                        {/* <div className={styles.divTabPanel}>
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
                        </div> */}
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
                        borderBottom: "1px solid #eeeeee",
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
