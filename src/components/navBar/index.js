import React from "react";
import "./navBar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillFund, AiFillSecurityScan,AiFillSchedule } from "react-icons/ai";
import { FaExchangeAlt, FaUsers } from "react-icons/fa";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <BottomNavigation
            className="container"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <Link to="/">
              <BottomNavigationAction
                className="menuIten"
                icon={<AiFillHome />}
              />
            </Link>

            <Link to="/Line">
              <BottomNavigationAction
                className="menuIten"
                icon={<AiFillFund />}
              />
            </Link>

            <Link to="/Choice">
              <BottomNavigationAction
                className="menuIten"
                icon={<FaExchangeAlt />}
              />
            </Link>

            <Link to="/Cards">
              <BottomNavigationAction
                className="menuIten"
                icon={<AiFillSchedule />}
              />
            </Link>

            <Link to="/Users">
              <BottomNavigationAction className="menuIten" icon={<FaUsers />} />
            </Link>

            <Link to="/Other">
              <BottomNavigationAction
                className="menuIten"
                icon={<AiFillSecurityScan />}
              />
            </Link>
          </BottomNavigation>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
