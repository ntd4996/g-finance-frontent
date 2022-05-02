import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

type MyComponentProps = React.PropsWithChildren<{
    color1?: any;
    color2?: any;
}>;

ChartTable.defaultProps = {
    color1: "#00B98D",
    color2: "rgba(0, 221, 168, 0)",
};

export default function ChartTable(props: MyComponentProps) {
    const { color1, color2 } = props;
    const option = {
        title: {
            text: "Stacked Area Chart",
            show: false,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985",
                },
            },
            show: false,
        },
        legend: {
            data: [
                "Email",
                "Union Ads",
                "Video Ads",
                "Direct",
                "Search Engine",
            ],
            show: false,
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
            show: false,
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: false,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                show: false,
            },
        ],
        yAxis: [
            {
                type: "value",
                show: false,
            },
        ],
        color: [color1],
        series: [
            {
                name: "Search Engine",
                type: "line",
                stack: "Total",
                silent: true,
                showSymbol: false,
                label: {
                    show: false,
                    position: "top",
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: color1,
                        },
                        {
                            offset: 1,
                            color: color2,
                        },
                    ]),
                },
                emphasis: {
                    focus: "series",
                },
                data: [12, 13, 9, 15, 6, 22, 12],
                markLine: {
                    lineStyle: {
                        color: "#ADB3C0",
                    },
                    data: [
                        {
                            type: "average",
                        },
                    ],
                    silent: true,
                    label: {
                        show: false,
                    },
                    symbol: ["none", "none"],
                },
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{
                height: "100%",
                width: "100%",
            }}
        />
    );
}
