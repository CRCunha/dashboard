import React from "react";
import "./description.css";
import ImgDesciption from "../../assets/description.svg";
import { AiFillInfoCircle } from "react-icons/ai";

const Description = (props) => {
  return (
    <div className="description">
      <div className="content">
        <div className="text">
          <div className="title">
            <AiFillInfoCircle className="icon" />
            {props.title}
          </div>
          <div className="descriptionText">{props.description}</div>
        </div>
        <div className="imgContainer">
          <img src={ImgDesciption} alt="ImgDesciption" />
        </div>
      </div>
    </div>
  );
};

export default Description;
