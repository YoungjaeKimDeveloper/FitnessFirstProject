import React, { useState } from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
import BlogHeader from "./BlogHeader";
const BlogLayout = () => {
  const [category, setCategory] = useState("business");

  const selectedCategory = (category) => setCategory(category);
  const [searchNews, setSearchNews] = useState("samsung");

  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <BlogHeader setSearchNews={setSearchNews} searchNews={searchNews} />
        <BlogMenu selectedCategory={selectedCategory} />
        <BlogNews category={category} searchNews={searchNews} />
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
