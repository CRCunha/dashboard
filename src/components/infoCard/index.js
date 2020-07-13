import React from "react";
import "./infoCard.css";
import { AiFillCheckSquare } from "react-icons/ai";

const InfoCard = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="title">Card Teste</div>
        <div className="icon">
          <AiFillCheckSquare />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
