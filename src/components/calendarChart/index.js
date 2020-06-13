import React from "react";
import "./calendarChart.css";
import data from "./data.json";
import { ResponsiveCalendar } from "@nivo/calendar";
import { ListColors } from "../colorCharts.js";

const CaledarChart = () => {
  return (
    <div className="calendarChart">
      <div className="title">CalendarChart</div>
      <div className="responsiveContainer">
        <ResponsiveCalendar
          data={data}
          from="2017-01-2"
          to="2017-12-30"
          emptyColor="#eeeeee"
          colors={ListColors}
          margin={{ top: 0, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CaledarChart;
