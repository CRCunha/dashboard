import React from "react";
import "./scatterChart.css";
import data from "./data.json";
import { ListColors } from "../colorCharts.js";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const ScatterChart = () => {
  return (
    <div className="scatterPlot">
      <div className="title">ScatterChart</div>
      <div className="responsiveContainer">
        <ResponsiveScatterPlot
          data={data}
          colors={ListColors}
          margin={{ top: 40, right: 140, bottom: 40, left: 90 }}
          xScale={{ type: "linear", min: 0, max: "auto" }}
          xFormat={function (e) {
            return e + " kg";
          }}
          yScale={{ type: "linear", min: 0, max: "auto" }}
          yFormat={function (e) {
            return e + " cm";
          }}
          blendMode="multiply"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "weight",
            legendPosition: "middle",
            legendOffset: 46,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "size",
            legendPosition: "middle",
            legendOffset: -60,
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 130,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 12,
              itemsSpacing: 5,
              itemDirection: "left-to-right",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ScatterChart;
