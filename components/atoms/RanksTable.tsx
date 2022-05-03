import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./RanksTable.module.scss";

function createData(
    name: string,
    calories: string,
    fat: number,
    carbs: number,
    protein: string
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
    createData("MBB", "Ngân hàng", 6.0, 24, "Mua"),
];

export default function RanksTable() {
    return (
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
                            Mã
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="left"
                            sx={{
                                padding: 0,
                            }}
                        >
                            Ngành
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="center"
                            sx={{
                                padding: 0,
                            }}
                        >
                            Giá
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="center"
                            sx={{
                                padding: 0,
                            }}
                        >
                            RSI
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="center"
                            sx={{
                                padding: 0,
                            }}
                        >
                            Điểm Số
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="center"
                            sx={{
                                padding: 0,
                                paddingcenter: "15px",
                            }}
                        >
                            Tín Hiệu
                        </TableCell>
                    </TableRow>
                </TableHead>
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
                            <TableCell
                                sx={{
                                    paddingRight: 0,
                                }}
                                align="left"
                            >
                                <div className={styles.code}>{row.name}</div>
                            </TableCell>
                            <TableCell
                                sx={{
                                    paddingRight: 0,
                                    paddingLeft: 0,
                                }}
                                align="left"
                            >
                                {row.calories}
                            </TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">
                                <div className={styles.numberLabel}>
                                    {row.carbs}
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className={styles.btnBuy}>
                                    {row.protein}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
