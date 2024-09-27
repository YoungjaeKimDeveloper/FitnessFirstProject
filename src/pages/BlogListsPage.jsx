import React, { useEffect, useState } from "react";
import "./BlogListsPage.css";
import axios from "axios";
import BlogList from "../components/Blog/BlogList/BlogList";
import Spinner from "../components/common/Spinner";

const BlogListsPage = () => {
  const [diaryLists, setDiaryLists] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const fetchingData = async () => {
    const response = await axios.get("http://localhost:8000/diary");
    setDiaryLists(response.data);
  };
  // Call the API
  useEffect(() => {
    try {
      setisLoading(true);
      fetchingData();
    } catch (error) {
      setisLoading(false);
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  }, []);
  if (isLoading) {
    <Spinner />;
  }
  if (error) {
    <p>{error}</p>;
  }
  console.log("Blog Lists", diaryLists);
  return (
    <div className="blog-lists-layout">
      <div className="blog-lists-layout-header">
        <h1 className="blog-lists-layout-title">The Moments I Cherished</h1>
      </div>
      {/* Blog Lists */}
      {diaryLists.map((diaryList) => {
        return <BlogList key={diaryList.id} {...diaryList} />;
      })}
    </div>
  );
};

export default BlogListsPage;
