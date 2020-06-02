import React from "react";
import "./navBar.css";
import Logo from "../../assets/logo.png";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <div className="container">
            <div className="menuIten">
              <DraftsOutlinedIcon />
            </div>
            <div className="menuIten">
              <ShowChartIcon />
            </div>
            <div className="menuIten">
              <WebAssetOutlinedIcon />
            </div>
            <div className="menuIten">
              <TurnedInNotOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
