import React from "react";
import "./home.css";
import Descritpion from "../../components/description";
import BarChart from "../../components/barChart";

const Home = () => {
  return (
    <div className="contentHome">
      <Descritpion
        title="Home Page"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <BarChart style={{ marginTop: -100 }} />
    </div>
  );
};

export default Home;
