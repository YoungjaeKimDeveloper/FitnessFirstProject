import React from "react";
import "./BlogLayout.css";
import newImg from "../../../public/assets/fitness.jpg";
import sample1 from "../../../public/assets/boxing.jpg";
import sample2 from "../../../public/assets/kickBoxing.jpg";
import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <div className="blog-main-title">News&Blogs</div>
        <BlogMenu />
        <BlogNews />
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
