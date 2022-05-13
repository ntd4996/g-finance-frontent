import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import styles from "./ChartGauge.module.scss";
import Image from "next/image";

export default function ChartGauge() {
    const option = {
        series: [
            {
                type: "gauge",
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                splitNumber: 10,
                pointer: {
                    offsetCenter: [0, "-54%"],
                    length: "32%",
                    itemStyle: {
                        color: "#58D9F9",
                    },
                },
                anchor: {
                    show: true,
                    itemStyle: {
                        color: "#f4931c",
                    },
                    offsetCenter: ["0%", "-30%"],
                    size: 30,
                    icon: "path://M245.014,94.534C244.856,94.778,242.793,102.623,240.43,111.969L236.133,128.961,234.57,128.895C233.711,128.859,224.093,126.597,213.197,123.868,202.3,121.139,193.16,118.993,192.884,119.099,192.2,119.363,186.812,141.134,187.316,141.6,187.525,141.792,191.22,142.825,195.529,143.895,208.937,147.225,212.5,149.969,212.5,156.969,212.5,158.923,188.491,254.948,187.533,256.824,185.232,261.334,182.465,261.676,171.17,258.844,166.886,257.77,163.206,256.891,162.993,256.891,162.6,256.891,152.33,280.127,152.339,280.997,152.342,281.257,153.003,281.642,153.809,281.853,154.614,282.064,163.364,284.266,173.252,286.746,192.891,291.672,195.312,292.33,195.313,292.746,195.313,292.898,193.357,300.91,190.967,310.548,187.935,322.773,186.754,328.155,187.061,328.345,187.829,328.82,207.823,333.572,208.059,333.336,208.184,333.212,210.211,325.409,212.565,315.997,214.919,306.584,216.975,298.751,217.134,298.589,217.398,298.321,233.452,302.322,233.897,302.766,234.002,302.872,232.141,310.742,229.762,320.256,227.382,329.77,225.557,337.675,225.706,337.823,226.212,338.325,246.603,343.256,246.881,342.944,247.033,342.773,249.051,334.986,251.365,325.641,256.244,305.937,255.526,307.419,259.813,308.207,303.296,316.2,325.989,304.747,334.404,270.563,335.62,265.624,335.759,254.671,334.658,250.641,332.079,241.206,325.879,234.003,314.355,227.052,312.998,226.233,312.996,225.797,314.349,225.457,327.83,222.074,337.062,211.05,339.668,195.227,343.342,172.922,330.324,156.73,299.902,145.768,296.159,144.419,296.039,146.547,300.977,126.813,303.232,117.797,305.078,110.087,305.078,109.681,305.078,108.865,284.583,103.397,283.947,104.042,283.779,104.212,281.774,111.822,279.492,120.953,277.21,130.084,275.21,137.689,275.049,137.853,274.887,138.018,271.426,137.356,267.358,136.384,263.289,135.411,259.565,134.526,259.082,134.417,257.82,134.133,257.784,134.331,262.322,116.198,264.587,107.144,266.301,99.613,266.13,99.462,265.375,98.792,245.293,94.106,245.014,94.534M260.405,161.612C285.69,167.471,297.104,175.494,297.587,187.745,298.26,204.8,284.444,211.787,259.326,207.095,253.399,205.988,242.26,203.214,241.772,202.724,241.525,202.476,248.943,171.305,251.569,161.554,252.088,159.627,251.829,159.625,260.405,161.612M244.385,226.583C276.554,234.105,290.327,243.106,290.926,256.999,291.747,276.008,274.779,283.248,244.043,277.004,236.399,275.451,224.532,272.379,224.351,271.906,224.22,271.566,235.04,227.341,235.741,225.348,235.989,224.645,236.259,224.683,244.385,226.5838",
                },
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        width: 18,
                        color: [
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                                    {
                                        offset: 0,
                                        color: "rgba(246,165,4,1)",
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(245,246,7,1)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(65,255,0,1)",
                                    },
                                ]),
                            ],
                        ],
                    },
                },
                axisTick: {
                    show: false,

                    splitNumber: 2,
                    lineStyle: {
                        width: 2,
                        color: "#999",
                    },
                },
                splitLine: {
                    show: false,
                    length: 12,
                    lineStyle: {
                        width: 3,
                        color: "#999",
                    },
                },
                axisLabel: {
                    show: false,
                    distance: 30,
                    color: "#999",
                    fontSize: 10,
                },
                title: {
                    show: true,
                    offsetCenter: [0, "-20%"],
                },
                detail: {
                    backgroundColor: "#fff",
                    borderColor: "#999",
                    borderWidth: 2,
                    width: "20%",
                    lineHeight: 20,
                    height: 20,
                    borderRadius: 8,
                    offsetCenter: [0, "0%"],
                    valueAnimation: true,
                    formatter: function (value: number) {
                        return "{value|" + value.toFixed(0) + "}";
                    },
                    rich: {
                        value: {
                            fontSize: 20,
                            fontWeight: "bolder",
                            color: "#777",
                        },
                        unit: {
                            fontSize: 10,
                            color: "#999",
                            padding: [0, 0, -20, 10],
                        },
                    },
                },
                data: [
                    {
                        value: 46,
                    },
                ],
            },
        ],
    };
    const eChartsRef = React.useRef(null as any);

    useEffect(() => {
        const interval: any = window.setInterval(() => {
            if (eChartsRef && eChartsRef.current) {
                eChartsRef.current?.getEchartsInstance().setOption({
                    series: [
                        {
                            data: [
                                {
                                    value: +(Math.random() * 100).toFixed(2),
                                },
                            ],
                        },
                    ],
                });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className="border border-t-0 border-x-0">
                <div className={styles.divTitle}>
                    <Image
                        src="/bitcoin.png"
                        alt="news"
                        width="30px"
                        height="30px"
                        objectFit="contain"
                    />
                    Fear & Greed Index
                </div>
                <div className={styles.divSub}>
                    Multifactorial Crypto Market Sentiment Analysis
                </div>
            </div>

            <div className={styles.containerChart}>
                <div className="flex flex-col">
                    <span>Now:</span>
                    <span className={styles.textColorOrange}>Extreme Fear</span>
                </div>

                <div className={styles.bottomChart}>
                    <div>alternative.me</div>
                    <div>Last updated: Apr 18, 2022</div>
                </div>
                <div className={styles.divChart}>
                    <ReactECharts
                        option={option}
                        style={{
                            height: "100%",
                            width: "342px",
                            margin: "auto",
                        }}
                        className={styles.chart}
                        ref={eChartsRef}
                    />
                </div>
            </div>

            
        </div>
    );
}
