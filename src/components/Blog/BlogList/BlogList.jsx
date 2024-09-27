import React from "react";
import "./BlogList.css";

const BlogList = ({ title, content, date, mood, img }) => {
  return (
    <div className="blog-lists-layout-list">
      <img
        src={img}
        alt="blog-background-image"
        className="blog-background-image"
      />
      <div className="blog-list-content">
        <h1 className="blog-list-content-title">{title}</h1>
        <p>{date}</p>
        <p>{mood}</p>
        <p className="blog-list-content-details">{content}</p>
      </div>
    </div>
  );
};

export default BlogList;
