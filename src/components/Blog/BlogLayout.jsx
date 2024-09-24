import React from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <div className="blog-main-title">News&Blogs</div>
        <BlogMenu />
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
