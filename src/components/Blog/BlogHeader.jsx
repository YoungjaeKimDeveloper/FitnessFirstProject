import React from "react";
import "./BlogHeader.css";
const BlogHeader = ({ searchNews, setSearchNews }) => {
  return (
    <div className="blog-main-header">
      <p>News&Blogs</p>
      <div className="blog-search-News">
        <input
          type="text"
          placeholder="Search..."
          className="blog-searc-News-input"
          value={searchNews}
          onChange={(e) => setSearchNews(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BlogHeader;
