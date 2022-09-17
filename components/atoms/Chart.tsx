import { useEffect, useRef } from "react";

import { createChart, CrosshairMode } from "lightweight-charts";
import React from "react";

export default function Chart(props: any) {
  const chartContainerRef = useRef() as any;
  const chart = useRef() as any;
  const resizeObserver = useRef();
  useEffect(() => {
    if (!chart)
      return
    if (!!chartContainerRef)
      return

    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500, //"300px", //chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#253248",
        textColor: "rgba(255, 255, 255, 0.9)"
      },
      grid: {
        vertLines: {
          color: "#334158"
        },
        horzLines: {
          color: "#334158"
        }
      },
      crosshair: {
        mode: CrosshairMode.Normal
      },
      // priceScale: {
      //   borderColor: "#485c7b"
      // },
      timeScale: {
        borderColor: "#485c7b"
      }
    });

    console.log(chart.current);
    // console.log('render chart');
    // if (!chartContainerRef)
    //   return;
    // console.log('render chart complete');
    // const chart = createChart(chartContainerRef, { width: 400, height: 300 });
    // const lineSeries = chart.addLineSeries();
    // lineSeries.setData([
    //   { time: '2019-04-11', value: 80.01 },
    //   { time: '2019-04-12', value: 96.63 },
    //   { time: '2019-04-13', value: 76.64 },
    //   { time: '2019-04-14', value: 81.89 },
    //   { time: '2019-04-15', value: 74.43 },
    //   { time: '2019-04-16', value: 80.01 },
    //   { time: '2019-04-17', value: 96.63 },
    //   { time: '2019-04-18', value: 76.64 },
    //   { time: '2019-04-19', value: 81.89 },
    //   { time: '2019-04-20', value: 74.43 },
    // ]);

  }, [])

  return (<div></div>)
}