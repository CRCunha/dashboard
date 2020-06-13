import React from "react";
import "./stream.css";
import data from "./data.json";
import { ListColors } from "../colorCharts.js";
import { ResponsiveStream } from "@nivo/stream";

const StreamChart = () => {
  return (
    <div className="steamChart">
      <div className="title">StreamChart</div>
      <div className="responsiveContainer">
        <ResponsiveStream
          data={data}
          keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -40,
          }}
          offsetType="silhouette"
          colors={ListColors}
          fillOpacity={0.85}
          borderColor={{ theme: "background" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#2c998f",
              size: 4,
              padding: 2,
              stagger: true,
            },
            {
              id: "squares",
              type: "patternSquares",
              background: "inherit",
              color: "#e4c912",
              size: 6,
              padding: 2,
              stagger: true,
            },
          ]}
          fill={[
            {
              match: {
                id: "Paul",
              },
              id: "dots",
            },
            {
              match: {
                id: "Marcel",
              },
              id: "squares",
            },
          ]}
          dotSize={8}
          dotColor={{ from: "color" }}
          dotBorderWidth={2}
          dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999999",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
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

export default StreamChart;
