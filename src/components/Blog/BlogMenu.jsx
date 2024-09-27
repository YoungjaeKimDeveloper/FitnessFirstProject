import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogMenu.css";
import dogFace from "../../../public/assets/blogPart/dogFace.jpg";
const BlogMenu = ({ selectedCategory }) => {
  const navList = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="blog-menu">
      <div className="blog-menu-profile">
        <Link to="/writingPage" className="blog-menu-profile-Link">
          <img src={dogFace} alt="profile-pic" className="blog-profile-img" />
          <p className="userName">Jeki</p>
        </Link>
      </div>
      <div className="blog-menu-linkLists">
        <h1>News List</h1>
        {navList.map((navList, index) => (
          <li key={index} onClick={() => selectedCategory(navList)}>
            {navList}
          </li>
        ))}
      </div>
    </div>
  );
};

export default BlogMenu;
