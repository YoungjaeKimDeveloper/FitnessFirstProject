import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogNewsElement from "./BlogNewsElement";
import "./BlogNews.css";
const NewsLayout = ({ category, searchNews }) => {
  const [newsAPIs, setNewsAPIs] = useState([]);
  const [error, setError] = useState("");
  const apple = "Apple";
  // Call API
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        searchNews
          ? `https://newsapi.org/v2/everything?q=${searchNews}&pageSize=7&apiKey=8b8f13a7555b42c0a6839d6b98169bbd`
          : `https://newsapi.org/v2/top-headlines?country=us&apiKey=8b8f13a7555b42c0a6839d6b98169bbd`
      );
      setNewsAPIs(response.data.articles);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [searchNews]);
  console.log("From BlogNEws", searchNews);
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
