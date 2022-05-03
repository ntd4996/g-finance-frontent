import React from "react";
import styles from "./TabSignal.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Lock from "../icons/Lock";
import BigLock from "../icons/BigLock";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number
) {
    return { name, calories, fat, carbs };
}

const rows = [createData("Quý 1", 5.9, 6.0, 24)];

export default function TabSignal() {
    return (
        <div className="w-full container">
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className={styles.tableHead}>
                            <TableCell
                                className={styles.textHead}
                                sx={{
                                    padding: 0,
                                    paddingLeft: "15px",
                                }}
                                align="left"
                            >
                                Xu hướng
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Nền tảng
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Tín hiệu
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Giá KN
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Độ nhiều
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    sx={{
                                        padding: 0,
                                        paddingRight: 0,
                                    }}
                                    align="left"
                                >
                                    <div className={styles.trend}>
                                        TRUNG LẬP
                                    </div>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: 0,
                                        paddingLeft: 0,
                                    }}
                                    align="center"
                                ></TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: 0,
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCenter}>
                                        <Lock />
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: 0,
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCenter}>
                                        <Lock />
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: 0,
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCenter}>
                                        <Lock />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={styles.note}>
                Tăng 12.5% từ điểm mua 28.90 ngày 21/02, CP tiêu chuẩn
            </div>
            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>ĐIỂM NỀN TẢNG</div>
                    <div>3</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>ĐIỂM TÍN HIỆU</div>
                    <div className={styles.textGreen}>57</div>
                </div>
                <div className={styles.flexCol}></div>
            </div>
            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>RSI</div>
                    <div className={styles.textGreen}>61.3</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>TOP RSI</div>
                    <div className={styles.textGreen}>188’ +300</div>
                </div>
                <div className={styles.flexCol}></div>
            </div>
            <div className={styles.flexRow}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>BREAK OUT 5</div>
                    <div>BREAK UP</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>BREAK OUT 20</div>
                    <div>-</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>BREAK OUT 60</div>
                    <div>-</div>
                </div>
            </div>
            <div className={styles.flexRowPb}>
                <div className={styles.flexCol}>
                    <div className={styles.title}>TÍN HIỆU CHỜ</div>
                    <div className={styles.lockInRow}>
                        <Lock />
                    </div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>GIÁ CHỜ</div>
                    <div className={styles.textGreen}>188’ +300</div>
                </div>
                <div className={styles.flexCol}>
                    <div className={styles.title}>32.2</div>
                    <div className={styles.textGreen}>57</div>
                </div>
            </div>
            <div className={styles.titleContent}>Tín hiệu 10 phiên trước</div>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className={styles.tableHead}>
                            <TableCell
                                className={styles.textHead}
                                sx={{
                                    padding: 0,
                                    paddingLeft: "15px",
                                }}
                                align="left"
                            >
                                Ngày
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Giá
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                +/-
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Tín hiệu
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                Giá KN
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                GDNN
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <div className={styles.lockContainer}>
                <div>
                    <BigLock />
                </div>
                Chỉ tài khoản VIP mới xem được nội dung này
            </div>
        </div>
    );
}
