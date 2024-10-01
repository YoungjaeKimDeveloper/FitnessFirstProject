import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoBookmarksOutline } from "react-icons/io5";
import Writing from "../Blog/Writing/Writing";
import "./BlogMenu.css";
import dogFace from "../../../public/assets/blogPart/dogFace.jpg";
const BlogMenu = ({
  selectedCategory,
  toogleShowingBookMarks,
  toggleWritingPage,
}) => {
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
        <p className="blog-menu-profile-Link" onClick={toggleWritingPage}>
          <img src={dogFace} alt="profile-pic" className="blog-profile-img" />
          <p className="userName">Jeki</p>
        </p>
      </div>
      <div className="blog-menu-linkLists">
        <h1>News List</h1>
        <IoBookmarksOutline
          className="bookMarks-open-icon"
          onClick={toogleShowingBookMarks}
        />

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
