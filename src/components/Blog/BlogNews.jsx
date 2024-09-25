import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogNewsElement from "./BlogNewsElement";
import "./BlogNews.css";
const NewsLayout = ({ category }) => {
  const [newsAPIs, setNewsAPIs] = useState([]);
  const [error, setError] = useState("");
  // Call API
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&pageSize=7&apiKey=c53761d913f646f2948f9078ff0b9329`
      );
      setNewsAPIs(response.data.articles);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [category]);
  console.log(newsAPIs);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="blog-news">
      <h1>Today's News</h1>
      {newsAPIs.length > 0 && (
        <BlogNewsElement
          isMain={true}
          title={newsAPIs[0].title}
          description={newsAPIs[0].description}
          urlToImage={newsAPIs[0].urlToImage}
          content={newsAPIs[0].content}
        />
      )}
      {/* <BlogNewsElement isMain={true} /> */}
      <div className="blog-news-sub-layout">
        {newsAPIs.slice(1).map((newsAPI, index) => (
          <BlogNewsElement key={index} {...newsAPI} />
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
