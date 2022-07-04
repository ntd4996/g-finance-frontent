import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import styles from "./ChartGaugeShare.module.scss";

export default function ChartGaugeShare(data: any) {
    const [value, setValue] = useState(0.5);
    const [totalBuy, setTotalBuy] = useState(0);
    const [totalSell, setTotalSell] = useState(0);
    const [totalNeutral, setTotalNeutral] = useState(0);
    useEffect(() => {
        const signal = data.signal;
        // const sum = (signal?.indicators || [])
        //     .reduce(
        //         (partialSum: number, a: any) => partialSum + (a.signal == 'buy' ? 1
        //             : a.signal == 'sell' ? -1
        //                 : 0), 0);
        const buy = (signal?.indicators || []).reduce((count: number, a: any) => count += a.signal == 'buy' ? 1 : 0, 0);
        const sell = (signal?.indicators || []).reduce((count: number, a: any) => count += a.signal == 'sell' ? 1 : 0, 0);
        const neutral = (signal?.indicators || []).reduce((count: number, a: any) => count += (a.signal != 'buy' && a.signal != 'sell') ? 1 : 0, 0);        
        setTotalNeutral(neutral);
        setTotalBuy(buy);
        setTotalSell(sell);
        

        const tv = buy / (sell + buy);
        setValue(tv);
    }, [data])
    const option = {
        backgroundColor: "#FFF",
        series: [
            {
                type: "gauge",
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 1,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        width: 15,
                        color: [
                            [0.2, "#EE4130"],
                            [0.4, "#D7645C"],
                            [0.6, "#585873"],
                            [0.8, "#92F2A2"],
                            [1, "#4FC868"],
                        ],
                    },
                },
                pointer: {
                    width: 5,
                    offsetCenter: [0, "-10%"],
                    itemStyle: {
                        color: "auto",
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                title: {
                    show: false,
                },
                detail: {
                    show: false,
                },
            },
        ],
    };
    const eChartsRef = React.useRef(null as any);
    return (
        <div className={styles.divChart}>
            <div className={styles.chart}>
                <ReactECharts
                    option={{ ...option, series: [{ ...option.series[0], data: [{ value }] }] }}
                    style={{
                        height: "100%",
                        width: "342px",
                        margin: "auto",
                    }}
                    ref={eChartsRef}
                />
                <div className={styles.buy}>Mua mạnh</div>
                <div className={styles.sale}>Bán mạnh</div>
                <div className={styles.middle}>Trung lập</div>
                <div className={styles.colLeft}>
                    <span>{totalSell}</span>
                    <span>Bán</span>
                </div>
                <div className={styles.colMiddle}>
                    <span>{totalNeutral}</span>
                    <span>Trung lập</span>
                </div>
                <div className={styles.colRight}>
                    <span>{totalBuy}</span>
                    <span>Mua</span>
                </div>
            </div>
        </div>
    );
}
