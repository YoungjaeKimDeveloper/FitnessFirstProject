import React from "react";
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const aboutUs = ["About us", "Carrers", "Contact us", "FAQ"];
  const company = ["Corporate", "Stduy With Us", "Become a Trainer", "Blog"];
  const programes = [
    "programs",
    "Swim School",
    "Dance School",
    "Personal Training",
  ];
  const icons = [
    <FaInstagramSquare />,
    <FaFacebook />,
    <FaTwitterSquare />,
    <FaXTwitter />,
  ];
  return (
    <div className="footer">
      <ul>
        {aboutUs.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
      <ul className>
        {company.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <ul>
        {programes.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
      <ul className="icons">
        <li>Follow Us</li>
        <div className="icons-list">
          {icons.map((icon, index) => (
            <li key={index}>{icon}</li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Footer;
