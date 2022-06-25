import React, { FC, useEffect, useState } from "react";
import styles from "./TabFinance.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import _ from "lodash";

export default function TabFinance(props: any) {
    const { data, loading } = props;
    // turnovers
    const [arrayKeyTurnoversState, setArrayKeyTurnoversState] = useState(
        [] as any[]
    );
    const [arrayValueTurnoversState, setArrayValueTurnoversState] = useState(
        {} as any
    );
    const [arrayTurnoversTitle, setArrayTurnoversTitle] = useState([] as any[]);

    // profits
    const [arrayKeyProfitsState, setArrayKeyProfitsState] = useState(
        [] as any[]
    );
    const [arrayValueProfitsState, setArrayValueProfitsState] = useState(
        {} as any
    );
    const [arrayProfitsTitle, setArrayProfitsTitle] = useState([] as any[]);
    useEffect(() => {
        if (data?.turnovers) {
            const arrayKey = Object.keys(data?.turnovers).map((key) => key);
            const arrayValue = Object.keys(data?.turnovers).map(
                (key) => data?.turnovers[key]
            );
            const arrGroup = [];
            for (const iterator of arrayValue) {
                for (const key in iterator.quarters) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            iterator.quarters,
                            key
                        )
                    ) {
                        const element = iterator.quarters[key];
                        arrGroup.push(element);
                    }
                }
            }
            const grouped = _.mapValues(_.groupBy(arrGroup, "label"), (list) =>
                list.map((ele) => _.omit(ele, "label"))
            );
            const arrayTurnoversTitle = Object.keys(grouped).map((key) => key);
            let maxLengthElementGroup = 0;
            for (const iterator in grouped) {
                if (grouped[iterator].length > maxLengthElementGroup)
                    maxLengthElementGroup = grouped[iterator].length;
            }
            for (const key in grouped) {
                if (Object.prototype.hasOwnProperty.call(grouped, key)) {
                    const element = grouped[key];
                    if (element.length < maxLengthElementGroup) {
                        element.push({
                            amount: 0,
                            deviant: 0,
                        });
                    }
                }
            }
            const element = arrayTurnoversTitle.splice(0, 1)[0];
            arrayTurnoversTitle.splice(arrayTurnoversTitle.length, 0, element);
            setArrayTurnoversTitle(arrayTurnoversTitle);
            setArrayKeyTurnoversState(arrayKey);
            setArrayValueTurnoversState(grouped);
        }
        if (data?.profits) {
            const arrayKey = Object.keys(data?.profits).map((key) => key);
            const arrayValue = Object.keys(data?.profits).map(
                (key) => data?.profits[key]
            );
            const arrGroup = [];
            for (const iterator of arrayValue) {
                for (const key in iterator.quarters) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            iterator.quarters,
                            key
                        )
                    ) {
                        const element = iterator.quarters[key];
                        arrGroup.push(element);
                    }
                }
            }
            const grouped = _.mapValues(_.groupBy(arrGroup, "label"), (list) =>
                list.map((ele) => _.omit(ele, "label"))
            );
            const arrayProfitsTitle = Object.keys(grouped).map((key) => key);
            let maxLengthElementGroup = 0;
            for (const iterator in grouped) {
                if (grouped[iterator].length > maxLengthElementGroup)
                    maxLengthElementGroup = grouped[iterator].length;
            }
            for (const key in grouped) {
                if (Object.prototype.hasOwnProperty.call(grouped, key)) {
                    const element = grouped[key];
                    if (element.length < maxLengthElementGroup) {
                        element.push({
                            amount: 0,
                            deviant: 0,
                        });
                    }
                }
            }
            const element = arrayProfitsTitle.splice(0, 1)[0];
            arrayProfitsTitle.splice(arrayProfitsTitle.length, 0, element);
            setArrayProfitsTitle(arrayProfitsTitle);
            setArrayKeyProfitsState(arrayKey);
            setArrayValueProfitsState(grouped);
        }
    }, [data]);

    const RenderRowArrayTurnoversTitle: FC = () => {
        let renderObj = arrayTurnoversTitle.map((title, indexTitle) => (
            <TableRow
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
                key={indexTitle}
            >
                <TableCell
                    sx={{
                        paddingRight: 0,
                    }}
                    align="left"
                >
                    <div className={styles.code}>{title}</div>
                </TableCell>
                {arrayValueTurnoversState[title]
                    ? arrayValueTurnoversState[title].map(
                          (value: any, index: number) => (
                              <TableCell
                                  sx={{
                                      paddingRight: 0,
                                      "&:last-child": {
                                          paddingRight: "16px !important",
                                      },
                                  }}
                                  align="right"
                                  key={index}
                              >
                                  <div className={styles.flexCol}>
                                      <div>{value.amount}</div>
                                      <div
                                          className={
                                              value.deviant >= 0
                                                  ? styles.textGreen
                                                  : styles.textRed
                                          }
                                      >
                                          {value.deviant}%
                                      </div>
                                  </div>
                              </TableCell>
                          )
                      )
                    : ""}
            </TableRow>
        ));
        return <>{renderObj}</>;
    };
    const RenderRowArrayProfitsTitle: FC = () => {
        console.log(arrayValueProfitsState["Cả năm"]);
        console.log(arrayProfitsTitle);
        let renderObj = arrayProfitsTitle.map((title, indexTitle) => (
            <TableRow
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
                key={indexTitle}
            >
                <TableCell
                    sx={{
                        paddingRight: 0,
                    }}
                    align="left"
                >
                    <div className={styles.code}>{title}</div>
                </TableCell>
                {arrayValueProfitsState[title]
                    ? arrayValueProfitsState[title].map(
                          (value: any, index: number) => (
                              <TableCell
                                  sx={{
                                      paddingRight: 0,
                                      "&:last-child": {
                                          paddingRight: "16px !important",
                                      },
                                  }}
                                  align="right"
                                  key={index}
                              >
                                  <div className={styles.flexCol}>
                                      <div>{value.amount}</div>
                                      <div
                                          className={
                                              value.deviant >= 0
                                                  ? styles.textGreen
                                                  : styles.textRed
                                          }
                                      >
                                          {value.deviant}%
                                      </div>
                                  </div>
                              </TableCell>
                          )
                      )
                    : ""}
            </TableRow>
        ));
        return <>{renderObj}</>;
    };

    return (
        <div className="w-full container">
            <div className={styles.table}>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow className={styles.tableHead}>
                                <TableCell
                                    className={styles.textHead}
                                    sx={{
                                        padding: 0,
                                        paddingLeft: "15px",
                                        minWidth: "80px",
                                    }}
                                    align="left"
                                >
                                    Doanh thu
                                </TableCell>
                                {arrayKeyTurnoversState.map((value, index) => (
                                    <TableCell
                                        className={styles.textHead}
                                        align="right"
                                        sx={{
                                            padding: 0,
                                            "&:last-child": {
                                                paddingRight: "16px !important",
                                            },
                                        }}
                                        key={index}
                                    >
                                        {value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <RenderRowArrayTurnoversTitle />
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
                                {arrayKeyProfitsState.map((value, index) => (
                                    <TableCell
                                        className={styles.textHead}
                                        align="right"
                                        sx={{
                                            padding: 0,
                                            "&:last-child": {
                                                paddingRight: "16px !important",
                                            },
                                        }}
                                        key={index}
                                    >
                                        {value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <RenderRowArrayProfitsTitle />
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
