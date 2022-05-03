import React from "react";
import styles from "./TabFinance.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number
) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData("Quý 1", 5.9, 6.0, 24),
    createData("Quý 2", 5.9, 6.0, 24),
    createData("Quý 3", 5.9, 6.0, 24),
    createData("Quý 4", 5.9, 6.0, 24),
    createData("Cả năm", 5.9, 6.0, 24),
];

export default function TabFinance() {
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
                                Doanh thu
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2018
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2019
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2020
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2021
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
                                    <div className={styles.code}>
                                        {row.name}
                                    </div>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                    align="right"
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.calories}</div>
                                        <div className={styles.textRed}>
                                            &nbsp;
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.fat}</div>
                                        <div className={styles.textRed}>
                                            -24.8%
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.carbs}</div>
                                        <div className={styles.textGreen}>
                                            857.7%
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.carbs}</div>
                                        <div className={styles.textGreen}>
                                            857.7%
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
                                Lợi nhuận
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2018
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2019
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2020
                            </TableCell>
                            <TableCell
                                className={styles.textHead}
                                align="right"
                                sx={{
                                    padding: 0,
                                    paddingRight: "15px",
                                }}
                            >
                                2021
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
                                    <div className={styles.code}>
                                        {row.name}
                                    </div>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                    align="right"
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.calories}</div>
                                        <div className={styles.textRed}>
                                            &nbsp;
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.fat}</div>
                                        <div className={styles.textRed}>
                                            -24.8%
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.carbs}</div>
                                        <div className={styles.textGreen}>
                                            857.7%
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        paddingLeft: 0,
                                    }}
                                >
                                    <div className={styles.flexCol}>
                                        <div>{row.carbs}</div>
                                        <div className={styles.textGreen}>
                                            857.7%
                                        </div>
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
