import React from "react";
import logo from "../../../public/assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  //Header Links
  const links = ["Home", "History", "Plan", "Diet", "Achievement"];
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" className="homePage-logo" />
          <p className="title">Fitness First</p>
        </div>
        <ul className="nav-lists">
          {links.map((link, index) => (
            <Link to={`${link.toLowerCase()}`} key={index} className="nav-list">
              {link}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
