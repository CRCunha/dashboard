import React from "react";
import "./line.css";
import Descritpion from "../../components/description";
import BumpChart from "../../components/bumpChart";

const Line = () => {
  return (
    <div className="content">
      <Descritpion
        title="Line Page"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <BumpChart />
    </div>
  );
};

export default Line;
