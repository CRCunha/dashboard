import React from "react";
import "./navBar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillMail,
  AiFillFund,
  AiFillHdd,
  AiFillSecurityScan,
} from "react-icons/ai";

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

            <Link to="/Other">
              <BottomNavigationAction
                className="menuIten"
                icon={<AiFillMail />}
              />
            </Link>

            <Link to="/Other">
              <BottomNavigationAction
                className="menuIten"
                icon={<AiFillHdd />}
              />
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
