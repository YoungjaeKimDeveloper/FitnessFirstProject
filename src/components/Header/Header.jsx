import React from "react";
import logo from "../../../public/assets/logo.png";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  //Header Links
  const links = ["Home", "Market", "Blog", "Plan", "Cart"];

  const links2 = [
    {
      slug: "",
      name: "Home",
    },
    {
      slug: "history",
      name: "History",
    },
  ];

  // return (
  //   <div>
  //     {links2.map((link) => {
  //       <Link to={link.slug}>{link.name}</Link>;
  //     })}
  //   </div>
  // );

  return (
    <div>
      <div className="header">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" className="homePage-logo" />
            <Link to={"home"} className="title">
              Calisthenics
            </Link>
          </div>
          <ul className="nav-lists">
            {links.map((link, index) => (
              <Link
                to={`${link.toLowerCase()}`}
                key={index}
                className="nav-list"
              >
                {link}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
