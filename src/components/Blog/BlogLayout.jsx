import React from "react";
import "./BlogLayout.css";
import newImg from "../../../public/assets/fitness.jpg";
import BlogMenu from "./BlogMenu";
const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <div className="blog-main-title">News&Blogs</div>
        <BlogMenu />
        <div className="blog-news">
          <div className="blog-news-main">
            <img src={newImg} alt="news-img" className="blog-news-main-img" />
          </div>
          <div className="blog-news-sub">
            <div className="blog-news-sub-element">1</div>
            <div className="blog-news-sub-element">1</div>
            <div className="blog-news-sub-element">1</div>
            <div className="blog-news-sub-element">1</div>
            <div className="blog-news-sub-element">1</div>
            <div className="blog-news-sub-element">1</div>
          </div>
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
