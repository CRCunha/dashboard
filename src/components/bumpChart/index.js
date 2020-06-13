import React from "react";
import "./bumpChart.css";
import data from "./data";
import { ListColors } from "../colorCharts.js";
import { ResponsiveBump } from "@nivo/bump";

const BumpChart = () => {
  return (
    <div className="bumpChart">
      <div className="title">BumpChart</div>
      <div className="responsiveContainer">
        <ResponsiveBump
          data={data}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          colors={ListColors}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          inactiveOpacity={0.15}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: "background" }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: "serie.color" }}
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -36,
          }}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "ranking",
            legendPosition: "middle",
            legendOffset: -40,
          }}
        />
      </div>
    </div>
  );
};

export default BumpChart;
