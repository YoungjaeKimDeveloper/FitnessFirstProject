import React from "react";
import dogFace from "../../../public/assets/blogPart/dogFace.jpg";
const BlogMenu = () => {
  const navList = [
    "general",
    "world",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
    "nation",
  ];
  return (
    <div className="blog-menu">
      <div className="blog-menu-profile">
        <img src={dogFace} alt="profile-pic" className="blog-profile-img" />
        <p className="userName">userName</p>
      </div>
      <div className="blog-menu-linkLists">
        <h1>News List</h1>
        {navList.map((navList, index) => (
          <li key={index}>{navList}</li>
        ))}
      </div>
    </div>
  );
};

export default BlogMenu;
