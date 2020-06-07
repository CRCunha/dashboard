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

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <div className="container">
            <Link to="/" className="menuIten">
              <AiFillHome />
            </Link>
            <Link to="/Other" className="menuIten">
              <AiFillMail />
            </Link>
            <Link to="/Other" className="menuIten">
              <AiFillFund />
            </Link>
            <Link to="/Other" className="menuIten">
              <AiFillHdd />
            </Link>
            <Link to="/Other" className="menuIten">
              <AiFillSecurityScan />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
