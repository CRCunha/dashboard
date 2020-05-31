import React from "react";
import "./navBar.css";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
