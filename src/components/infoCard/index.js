import React from "react";
import "./infoCard.css";
import { AiFillCheckSquare, AiFillDollarCircle } from "react-icons/ai";

const InfoCard = (props) => {
  return (
    <div className="card">
      <div className="header">
        <div className="title" style={{ color: props.color }}>
          Card Teste
        </div>
        <div style={{ color: props.color }} className="icon">
          <AiFillCheckSquare />
        </div>
      </div>
      <div className="tagContainer">
        <div style={{ borderColor: props.color }} className="tag">
          <div style={{ color: props.color }} className="tagIcon">
            <AiFillDollarCircle />
          </div>
          <div style={{ color: props.color }} className="tagText">
            TagTeste
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
