import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./RanksTable.module.scss";
import TicketServer from "../../services/ticket";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteHear from "./FavoriteHear";

function createData(name: string, calories: string, carbs: number) {
    return { name, calories, carbs };
}

export default function RanksTable() {
    const [loading, setLoading] = useState(true);
    const [dataFetch, setDataFetch] = useState([] as any[]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await TicketServer.listTicket({ page: page })
            .then((result) => {
                if (result?.data?.data) {
                    setDataFetch(result.data.data);
                    console.log("🚀 ~ result.data.data", result.data.data[3]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    const getMorePost = async () => {
        const pageList = page + 1;
        await TicketServer.listTicket({ page: pageList })
            .then((result) => {
                if (result?.data?.data) {
                    const data = result?.data?.data;
                    setDataFetch([...dataFetch, ...data]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
        setPage(page + 1);
    };

    const numberWithCommas = (x: any) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
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
                            width={"15%"}
                        >
                            Mã
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="left"
                            sx={{
                                padding: 0,
                            }}
                            width={"40%"}
                        >
                            Tên
                        </TableCell>
                        <TableCell
                            className={styles.textHead}
                            align="center"
                            sx={{
                                padding: 0,
                            }}
                        >
                            Giá (₫)
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
                            }}
                        >
                            <FlagIcon />
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {dataFetch.map((row: any, index) => (
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
                                    {row?.component}
                                </div>
                            </TableCell>
                            <TableCell
                                sx={{
                                    paddingRight: 0,
                                    paddingLeft: 0,
                                }}
                                align="left"
                            >
                                {row?.name}
                            </TableCell>
                            <TableCell align="center">
                                {numberWithCommas(row.costPrice)}
                            </TableCell>
                            <TableCell align="center">
                                <div className={styles.numberLabel}>
                                    {row?.scope ? parseInt(row?.scope) : 0}
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <FavoriteHear />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
