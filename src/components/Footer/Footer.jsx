import React from "react";
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="about-us">
        <li>about us</li>
        <li>Carrers</li>
        <li>Contact Us</li>
        <li>FAQs</li>
      </ul>
      <ul className="about-us">
        <li>company</li>
        <li>Carrers</li>
        <li>Contact Us</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <li>programs</li>
        <li>Swim School</li>
        <li>Dance Shcool</li>
        <li>Personal Training</li>
      </ul>
      <ul className="icons">
        <li>Follow Us</li>
        <div className="icons-list">
          <FaInstagramSquare />
          <FaFacebook />
          <FaTwitterSquare />
          <FaXTwitter />
        </div>
      </ul>
    </div>
  );
};

export default Footer;
