import React, { useState } from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
import BlogHeader from "./BlogHeader";
import BlogListsPage from "../../pages/BlogListsPage";
import Footer from "../Footer/Footer";

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

        <Footer className="blog-footer" />
      </div>
    </div>
  );
};

export default BlogLayout;
