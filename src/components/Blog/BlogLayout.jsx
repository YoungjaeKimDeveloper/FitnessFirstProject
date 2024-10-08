import React, { useEffect, useState } from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
import BlogHeader from "./BlogHeader";
import BlogListsPage from "../../pages/BlogListsPage";
import Footer from "../Footer/Footer";
import BlogModal from "./BlogModal/BlogModal";
import SavedBookMarks from "./SavedBookMarks/SavedBookMarks";
import Writing from "./Writing/Writing";

const BlogLayout = () => {
  const [category, setCategory] = useState("business");

  const selectedCategory = (category) => setCategory(category);
  const [searchNews, setSearchNews] = useState("");

  const [isModalPoP, setIsModalPoP] = useState(false);
  const toggleModal = () => setIsModalPoP((prev) => !prev);

  const [selectedArticle, setSelectedArticle] = useState(null);
  const selectArticle = (article) => setSelectedArticle(article);
  // Book Marks Part
  const [bookMarks, setBookMarks] = useState([]);
  const [isShowBookMark, setIsShowBookMark] = useState(false);

  const toogleShowingBookMarks = () => setIsShowBookMark((prev) => !prev);
  const addBookMarks = (article) => {
    setBookMarks((prev) => [...prev, article]);
  };
  const deleteBookMarks = (title) => {
    const filterdBookMarks = bookMarks.filter(
      (bookMark) => bookMark.title !== title
    );
    setBookMarks(filterdBookMarks);
  };
  // Show Writing page
  const [showWritingPage, setShowbloWritingPage] = useState(false);
  const toggleWritingPage = () => {
    setShowbloWritingPage((prev) => !prev);
  };

  // Writing Page Components
  const today = new Date().toISOString().split("T")[0];
  const [writinObject, setWritingObject] = useState({
    title: "",
    content: "",
    date: today,
    image: null,
  });
  // HANDLE HTTP
  const addDiary = async (newStory) => {
    try {
      const res = await fetch("http://localhost:8000/diary", {
        method: "POST",
        body: JSON.stringify(newStory),
      });
      console.log("Successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete HTTP Request
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:8000/diary/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="blog-layout ">
      {showWritingPage ? (
        <Writing
          toggleWritingPage={toggleWritingPage}
          setWritingObject={setWritingObject}
          writinObject={writinObject}
          addDiary={addDiary}
        />
      ) : (
        <div className="blog-layout-container">
          <BlogHeader setSearchNews={setSearchNews} searchNews={searchNews} />
          <BlogMenu
            selectedCategory={selectedCategory}
            toogleShowingBookMarks={toogleShowingBookMarks}
            showWritingPage={showWritingPage}
            toggleWritingPage={toggleWritingPage}
          />
          <BlogNews
            category={category}
            searchNews={searchNews}
            toggleModal={toggleModal}
            selectArticle={selectArticle}
            addBookMarks={addBookMarks}
          />
          <BlogListsPage className="blog-list" deleteJob={deleteJob} />
          {isModalPoP ? (
            <BlogModal
              className="modal"
              toggleModal={toggleModal}
              selectedArticle={selectedArticle}
              toogleShowingBookMarks={toogleShowingBookMarks}
              addBookMarks={addBookMarks}
              bookMarks={bookMarks}
            />
          ) : (
            ""
          )}
          {isShowBookMark && (
            <SavedBookMarks
              bookMarks={bookMarks}
              toogleShowingBookMarks={toogleShowingBookMarks}
              addBookMarks={addBookMarks}
              deleteBookMarks={deleteBookMarks}
            />
          )}
          <Footer className="blog-footer" />
        </div>
      )}
    </div>
  );
};

export default BlogLayout;
