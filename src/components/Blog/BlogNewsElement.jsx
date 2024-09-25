import React from "react";
import newImg from "../../../public/assets/fitness.jpg";
import "./BlogNewsElement.css";

const BlogNewsElement = ({
  isMain,
  title,
  urlToImage,
  description,
  content,
}) => {
  return (
    <div className={isMain ? "blog-news-main" : "blog-news-sub-element"}>
      <img
        src={urlToImage ? urlToImage : newImg}
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
        <h1>{title?.slice(1, 10)}</h1>
        {isMain ? (
          <p className="news-content">{content}</p>
        ) : (
          <p>{description?.slice(0, 100) + "..."}</p>
        )}
      </div>
    </div>
  );
};

export default BlogNewsElement;
