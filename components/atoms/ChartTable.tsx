import React, { useEffect } from "react";
import ReactECharts, { EChartsInstance } from "echarts-for-react";
import * as echarts from "echarts";
import { useState } from "react";
import TicketServer from "../../services/ticket";

type MyComponentProps = React.PropsWithChildren<{
    color1?: any;
    color2?: any;
    component?: string;
}>;

ChartTable.defaultProps = {
    color1: "#00B98D",
    color2: "rgba(204, 0, 0, 0)",
};

export default function ChartTable(props: MyComponentProps) {
    const { color1, component } = props;
    const [chart, setChart] = useState(null as unknown as EChartsInstance);
    const [color2, setColor2] = useState(props.color2);
    const loadHistory = async (component: string) => {
        const result = await TicketServer.historiesTicket({
            id: component,
            size: 15,
        });
        const res = result?.data;
        if ((res?.data || []).length == 0) {
            return;
        }
        chart.setOption({
            series: [
                {
                    type: "line",
                    name: "price",
                    data: res?.data.map(
                        (item: { close: number }) => item.close
                    ),
                },
            ],
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: res?.data.map((item: { time: string }) => item.time),
                    show: false,
                },
            ],
        });
    };
    useEffect(() => {
        if (!component) {
            return;
        }
        if (!chart) {
            return;
        }
        loadHistory(component);
        setColor2(hexToRgbA(color1));
    }, [component, chart]);
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
                data: [],
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
                data: [] as number[],
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
    const chartRef = (chart: EChartsInstance): void => {
        setChart(chart);
    };
    const hexToRgbA = (hex: string) => {
        let c: any;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split("");
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = "0x" + c.join("");
            return (
                "rgba(" +
                [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
                ",0)"
            );
        }
        throw new Error("Bad Hex");
    };

    return (
        <ReactECharts
            option={option}
            onChartReady={chartRef}
            style={{
                height: "100%",
                width: "100%",
            }}
        />
    );
}
