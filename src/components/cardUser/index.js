import React from "react";
import "./carduser.css";
import Avatar from "@material-ui/core/Avatar";

const CardUser = (props) => {
  return (
    <div className="cardUser">
      <div className="avatarIcon">
        <Avatar
          style={{ backgroundColor: "#e67225", width: 60, height: 60 }}
          alt={props.nome}
          src={props.nome}
        />
      </div>
      <div className="nome">{props.nome}</div>
    </div>
  );
};

export default CardUser;
