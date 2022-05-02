import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import styles from "./RanksTable.module.scss";
import ChartTable from "./ChartTable";
import { style } from "@mui/system";

export default function RanksTable() {
    function createData(
        name: string,
        subName: string,
        calories: number,
        color1: string,
        color2: string,
        carbs: number
    ) {
        return { name, subName, calories, color1, color2, carbs };
    }

    const rows = [
        createData("MBB", "MBBank", 159, "#00B98D", "rgba(0, 221, 168, 0)", 24),
        createData(
            "TCB",
            "Techcombank",
            9.0,
            "#F04164",
            "rgba(255, 141, 141, 0.1)",
            37
        ),
        createData(
            "PNJ",
            "CTCP Đá quý...",
            16.0,
            "#E7BC26",
            "rgba(255, 236, 136, 0.1)",
            24
        ),
        createData(
            "VNMHF",
            "VIETNAM HO...",
            3.7,
            "#DE20DF",
            "rgba(255, 160, 240, 0.1)",
            67
        ),
        createData(
            "VCVOF",
            "VIETNAM HO...",
            16.0,
            "#41BCE4",
            "rgba(255, 160, 240, 0.1)",
            49
        ),
        createData("MBB", "MBBank", 159, "#00B98D", "rgba(0, 221, 168, 0)", 24),
        createData(
            "TCB",
            "Techcombank",
            9.0,
            "#F04164",
            "rgba(255, 141, 141, 0.1)",
            37
        ),
        createData(
            "PNJ",
            "CTCP Đá quý...",
            16.0,
            "#E7BC26",
            "rgba(255, 236, 136, 0.1)",
            24
        ),
        createData(
            "VNMHF",
            "VIETNAM HO...",
            3.7,
            "#DE20DF",
            "rgba(255, 160, 240, 0.1)",
            67
        ),
        createData(
            "VCVOF",
            "VIETNAM HO...",
            16.0,
            "#41BCE4",
            "rgba(255, 160, 240, 0.1)",
            49
        ),
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>Top cổ phiếu hàng đầu</div>
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
                                    height: "60px",
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                        padding: 0,
                                        width: "100px",
                                    }}
                                >
                                    <div className={styles.colName}>
                                        <div className={styles.name}>
                                            {row.name}
                                        </div>
                                        <div className={styles.subName}>
                                            {row.subName}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: 0,
                                        width: "56px",
                                    }}
                                    className={styles.colChartTable}
                                >
                                    <div className={styles.colName}>
                                        <div className={styles.positionChart}>
                                            <div className={styles.chard}>
                                                <ChartTable
                                                    color1={row.color1}
                                                    color2={row.color2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: 0,
                                    }}
                                >
                                    <div className={styles.colName}>
                                        <div className={styles.numberTop}>
                                            {row.calories}
                                        </div>
                                        <div className={styles.numberBottom}>
                                            1,024,960,840
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: 0,
                                        paddingLeft: "35px",
                                    }}
                                >
                                    <div className={styles.numberLabel}>
                                        {row.carbs}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
