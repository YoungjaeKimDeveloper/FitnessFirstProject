import React from "react";
import "./BlogList.css";
import defaultBG from "../../../assets/diary.jpg";
import defaultBG2 from "../../../assets/love.jpg";

const BlogList = ({ title, content, date, mood, img }) => {
  const backgroundLists = [defaultBG, defaultBG2];
  const randomNumber = Math.ceil(Math.random() * backgroundLists.length);
  const defaultBg = backgroundLists[randomNumber];
  return (
    <div className="blog-lists-layout-list">
      <img
        src={img || defaultBg}
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
