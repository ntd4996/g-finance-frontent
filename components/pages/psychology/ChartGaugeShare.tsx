import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import styles from "./ChartGaugeShare.module.scss";

export default function ChartGaugeShare() {
    useEffect(() => {
        const interval: any = window.setInterval(() => {
            const randomValue = +(Math.random() * 1).toFixed(2);
            if (eChartsRef && eChartsRef.current) {
                eChartsRef.current?.getEchartsInstance().setOption({
                    series: [
                        {
                            data: [
                                {
                                    value: randomValue,
                                },
                            ],
                        },
                    ],
                });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const option = {
        backgroundColor: "#000",
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
                data: [
                    {
                        value: 0.3,
                    },
                ],
            },
        ],
    };
    const eChartsRef = React.useRef(null as any);
    return (
        <div className={styles.divChart}>
            <div className={styles.chart}>
                <ReactECharts
                    option={option}
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
                    <span>8</span>
                    <span>Bán</span>
                </div>
                <div className={styles.colMiddle}>
                    <span>1</span>
                    <span>Trung lập</span>
                </div>
				<div className={styles.colRight}>
                    <span>0</span>
                    <span>Mua</span>
                </div>
            </div>
        </div>
    );
}
