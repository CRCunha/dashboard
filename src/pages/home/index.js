import React from "react";
import "./home.css";
import Descritpion from "../../components/description";
import BarChart from "../../components/barChart";
import PieChart from "../../components/pieChart";
import RadarChart from "../../components/radarChart";
import CalendarChart from "../../components/calendarChart";

const Home = () => {
  return (
    <div className="contentHome">
      <Descritpion
        title="Home Page"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <BarChart />
      <div className="smallCharts">
        <PieChart />
        <RadarChart />
        <PieChart />
      </div>
      <CalendarChart />
    </div>
  );
};

export default Home;
