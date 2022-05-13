import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import styles from "./ChartLine.module.scss";

export default function ChartLine() {
    const option = {
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: "line",
                smooth: true,
                color: "gray",
            },
        ],
    };
    const eChartsRef = React.useRef(null as any);
    return (
        <div className={styles.container}>
            <div className={styles.divChart}>
                <ReactECharts
                    option={option}
                    style={{
                        height: "100%",
						width: '342px',
                        margin: "auto",
                    }}
                    className={styles.chart}
                    ref={eChartsRef}
                />
            </div>
        </div>
    );
}
