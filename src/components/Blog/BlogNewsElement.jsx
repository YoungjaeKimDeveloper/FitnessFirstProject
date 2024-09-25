import React from "react";
import newImg from "../../../public/assets/fitness.jpg";
import "./BlogNewsElement.css";

const BlogNewsElement = ({ isMain }) => {
  return (
    <div className={isMain ? "blog-news-main" : "blog-news-sub-element"}>
      <img
        src={newImg}
        alt="blog-news-sub-element-img"
        className={isMain ? "blog-news-main-img" : "blog-news-sub-element-img"}
      />
      <div
        className={
          isMain
            ? "blog-news-main-description"
            : "blog-news-sub-element-description"
        }
      >
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsum
          aliquam non, perferendis, aut hic est amet rerum aperiam a vero eum!
        </p>
      </div>
    </div>
  );
};

export default BlogNewsElement;
