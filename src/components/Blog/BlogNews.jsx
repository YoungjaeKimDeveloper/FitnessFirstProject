import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogNewsElement from "./BlogNewsElement";
import "./BlogNews.css";
const NewsLayout = () => {
  const [newsAPI, setNewsAPI] = useState([]);
  const [error, setError] = useState("");
  const fetchNews = async () => {
    try {
      const response = axios.get(
        "https://gnews.io/api/v4/search?q=example&apikey=ffe226945c502b0f15ec9953fff847a5"
      );
    } catch (error) {
      setError(error.message);
    }
  };
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
