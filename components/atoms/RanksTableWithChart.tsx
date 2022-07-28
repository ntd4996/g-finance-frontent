import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import styles from "./RanksTableWithChart.module.scss";
import ChartTable from "./ChartTable";
import { useRouter } from "next/router";
import TicketServer from "../../services/ticket";
import { Skeleton } from "@mui/material";

export default function RanksTable() {
    const router = useRouter();
    const [dataFetch, setDataFetch] = useState([]);
    const [loading, setLoading] = useState(true);

    const redirectPage = (row: any) => {
        router.push(`/detail/${row?.component}`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await TicketServer.listTicket()
            .then((result) => {
                if (result?.data?.data) {
                    setDataFetch(result.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Top cổ phiếu hàng đầu</div>
            {loading ? (
                <div>
                    {[...Array(10)].map((x, i) => (
                        <div className={styles.skeleton} key={i}>
                            <Skeleton variant="text" width={"40%"} height={50} />
                            <Skeleton variant="text" width={"10%"} height={50} />
                            <Skeleton variant="text" width={"10%"} height={50} />
                            <Skeleton variant="text" width={"40%"} />
                        </div>
                    ))}
                </div>
            ) : (
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            {dataFetch.map((row: any, index: number) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                        height: "60px",
                                    }}
                                    onClick={() => redirectPage(row)}
                                    className="cursor-pointer"
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{
                                            padding: 0,
                                            width: "100px",
                                        }}
                                    >
                                        <div className={styles.colTitle}>
                                            <div className={styles.name}>
                                                {row?.component}
                                            </div>
                                            <div className={styles.subName}>
                                                {row?.name}
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
                                            <div
                                                className={styles.positionChart}
                                            >
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
                                            <div className={styles.numberTop} style={{ color: row.priceColor }}>
                                                {(row.costPrice ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </div>
                                            <div
                                                className={styles.numberBottom}
                                            >
                                                {(row.volume ?? 0).toLocaleString('en-US', { minimumFractionDigits: 0 })}
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
                                            {parseInt(row?.scope) ??
                                                0}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}
