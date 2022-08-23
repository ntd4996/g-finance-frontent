import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./RanksTable.module.scss";
import FlagIcon from "@mui/icons-material/Flag";
import { useRouter } from "next/router";
import TicketServer from "../../../services/ticket";
import FavoriteHear from "../../atoms/FavoriteHear";
import Paginator from "./Paginator";
import { Skeleton } from "@mui/material";
import Filter from "./Filter";

function createData(name: string, calories: string, carbs: number) {
    return { name, calories, carbs };
}

export default function RanksTable() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [dataFetch, setDataFetch] = useState([] as any[]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, [page, filter]);

    const fetchData = async () => {
        await TicketServer.listTicket({ page: page, keyword: filter })
            .then((result) => {
                if (result?.data?.data) {
                    setDataFetch(result.data.data);
                }
                if (result?.data?.meta) {
                    const meta = result?.data?.meta;
                    setTotalPage(meta?.totalPage);
                    setPage(meta?.page);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setLoading(false);
    };

    const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page - 1);
    };

    const numberWithCommas = (x: any) => {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "";
    };

    const redirectPageDetail = (code: string) => {
        if (code) {
            router.push(`/detail/${code}`);
        }
    };

    const search = (filterSearch: string) => {
        setFilter(filterSearch);
    };
    return (
        <div>
            <Filter search={search} />
            <Paginator
                totalPage={totalPage}
                defaultPage={page}
                onChangePage={onChangePage}
            />
            <TableContainer className={styles.ranksTable}>
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
                        {loading ? (
                            <>
                                {[...Array(10)].map((x, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell align="left">
                                            <div className={styles.code}>
                                                <Skeleton
                                                    variant="rectangular"
                                                    height={20}
                                                    className="rounded-2xl"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                paddingRight: 0,
                                                paddingLeft: 0,
                                            }}
                                            align="left"
                                        >
                                            <Skeleton
                                                variant="rectangular"
                                                height={20}
                                                className="rounded-2xl"
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="rectangular"
                                                height={20}
                                                className="rounded-2xl"
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="rectangular"
                                                height={20}
                                                className="rounded-2xl"
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Skeleton
                                                variant="rectangular"
                                                height={20}
                                                className="rounded-2xl"
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            dataFetch.map((row: any, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                    className="cursor-pointer"
                                >
                                    <TableCell
                                        sx={{
                                            paddingRight: 0,
                                        }}
                                        align="left"
                                        onClick={() =>
                                            redirectPageDetail(row?.component)
                                        }
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
                                        onClick={() =>
                                            redirectPageDetail(row?.component)
                                        }
                                    >
                                        {row?.name}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        onClick={() =>
                                            redirectPageDetail(row?.component)
                                        }
                                    >
                                        {numberWithCommas(row.costPrice)}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        onClick={() =>
                                            redirectPageDetail(row?.component)
                                        }
                                    >
                                        <div className={styles.numberLabel}>
                                            {row?.scope
                                                ? parseInt(row?.scope)
                                                : 0}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FavoriteHear />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginator
                totalPage={totalPage}
                defaultPage={page}
                onChangePage={onChangePage}
            />
        </div>
    );
}
