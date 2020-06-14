import React from "react";
import "./users.css";
import Descritpion from "../../components/description";
import CardUser from "../../components/cardUser";

const Line = () => {
  return (
    <div className="content">
      <Descritpion
        title="Users Page"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <div className="users">
        <CardUser nome="Cristian" />
        <CardUser nome="Damassa" />
        <CardUser nome="Peil" />
        <CardUser nome="Guidotti" />
      </div>
    </div>
  );
};

export default Line;
