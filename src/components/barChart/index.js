import React, { useEffect, useState } from "react";
import "./barChart.css";
import { ResponsiveBar } from "@nivo/bar";
import { ListColors } from "../colorCharts.js";
import axios from "axios";

const BarChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/bar", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="barChart">
      <div className="title">BarChart</div>
      <div className="responsiveContainer">
        <ResponsiveBar
          data={data}
          keys={[
            "country",
            "hot dog",
            "hot dogColor",
            "burger",
            "burgerColor",
            "sandwich",
            "sandwichColor",
            "kebab",
            "kebabColor",
            "fries",
            "friesColor",
            "donut",
            "donutColor",
          ]}
          indexBy="country"
          margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={ListColors}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "transparent",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "food",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
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
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  );
};

export default BarChart;
