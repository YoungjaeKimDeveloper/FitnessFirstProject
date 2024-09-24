import React from "react";
import "./BlogLayout.css";
const BlogLayout = () => {
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
    <div className="blog-layout">
      <div className="blog-layout-container">
        <div className="blog-menu">
          <div className="blog-menu-profile">Profile</div>
          <div className="blog-menu-linkLists">
            {navList.map((navList, index) => (
              <li key={index}>{navList}</li>
            ))}
          </div>
        </div>
        <div className="blog-news">
          <p>News Part</p>
        </div>
        <div className="blog-list">
          <p>BLog-list Part</p>
        </div>
        <div className="blog-weatherTodoList">
          <p>Weather-Part</p>
        </div>
        <div className="blog-footer">footer</div>
      </div>
    </div>
  );
};

export default BlogLayout;
