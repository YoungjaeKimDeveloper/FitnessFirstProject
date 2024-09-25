import React, { useState } from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
const BlogLayout = () => {
  const [category, setCategory] = useState("business");
  const selectedCategory = (category) => setCategory(category);
  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <div className="blog-main-title">News&Blogs</div>
        <BlogMenu selectedCategory={selectedCategory} />
        <BlogNews category={category} />
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
