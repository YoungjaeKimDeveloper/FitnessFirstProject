import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogNewsElement from "./BlogNewsElement";
import "./BlogNews.css";
import Spinner from "../common/Spinner";

const NewsLayout = ({ category, searchNews, toggleModal, selectArticle }) => {
  const [newsAPIs, setNewsAPIs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Call API
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        // Delete Temp Later
        searchNews
          ? `https://newsapi.org/v2/everything?q=${searchNews}&pageSize=7&apiKey=5b6a599d287540bc9623b7defb6d9abf`
          : `https://newsapi.org/v2/top-headlines?country=us&pageSize=7&apiKey=5b6a599d287540bc9623b7defb6d9abf`
      );
      setNewsAPIs(response.data.articles);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchNewsByCategory = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=7&apiKey=5b6a599d287540bc9623b7defb6d9abf`
      );
      setNewsAPIs(response.data.articles);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [searchNews]);

  useEffect(() => {
    fetchNewsByCategory();
  }, [category]);
  console.log("From BlogNEws", searchNews);
  if (error) {
    return <p>{error}</p>;
  }
  if (isLoading) {
    return <Spinner />;
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
          url={newsAPIs[0].url}
          toggleModal={toggleModal}
          selectArticle={selectArticle}
          
        />
      )}
      {/* <BlogNewsElement isMain={true} /> */}
      <div className="blog-news-sub-layout">
        {newsAPIs.slice(1).map((newsAPI, index) => (
          <BlogNewsElement
            key={index}
            {...newsAPI}
            toggleModal={toggleModal}
            selectArticle={selectArticle}
            newsAPI={newsAPI}
            
          />
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
