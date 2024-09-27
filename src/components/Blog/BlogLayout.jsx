import React, { useState } from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
import BlogHeader from "./BlogHeader";
import BlogListsPage from "../../pages/BlogListsPage";
const BlogLayout = () => {
  const [category, setCategory] = useState("business");

  const selectedCategory = (category) => setCategory(category);
  const [searchNews, setSearchNews] = useState("");

  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <BlogHeader setSearchNews={setSearchNews} searchNews={searchNews} />
        <BlogMenu selectedCategory={selectedCategory} />
        <BlogNews category={category} searchNews={searchNews} />
        <BlogListsPage className="blog-list" />

        <div className="blog-footer">footer</div>
      </div>
    </div>
  );
};

export default BlogLayout;
