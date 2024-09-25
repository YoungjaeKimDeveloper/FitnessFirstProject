import React, { useEffect, useState } from "react";

import "./BlogNews.css";
import newImg from "../../../public/assets/boxing.jpg";
import BlogNewsElement from "./BlogNewsElement";
const NewsLayout = () => {
  const [newsAPI, setNewsAPI] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="blog-news">
      <h1>Today's News</h1>
      <BlogNewsElement isMain={true} />
      <div className="blog-news-sub-layout">
        <BlogNewsElement />
        <BlogNewsElement />
        <BlogNewsElement />
        <BlogNewsElement />
        <BlogNewsElement />
        <BlogNewsElement />
      </div>
    </div>
  );
};

export default NewsLayout;
