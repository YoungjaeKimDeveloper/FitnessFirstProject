import React, { useState } from "react";
import "./BlogLayout.css";

import BlogMenu from "./BlogMenu";
import BlogNews from "./BlogNews";
import BlogHeader from "./BlogHeader";
import BlogListsPage from "../../pages/BlogListsPage";
import Footer from "../Footer/Footer";
import BlogModal from "./BlogModal/BlogModal";
import SavedBookMarks from "./SavedBookMarks/SavedBookMarks";
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
  const addBookMarks = (article) => setBookMarks((prev) => [...prev, article]);
  const deleteBookMarks = (id) => {
    const filterdBookMarks = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookMarks(filterdBookMarks);
  };

  const [savedBookMarks, setSavedBookMarks] = useState(false);
  console.log("Selected Article", selectedArticle);
  return (
    <div className="blog-layout ">
      <div className="blog-layout-container">
        <BlogHeader setSearchNews={setSearchNews} searchNews={searchNews} />
        <BlogMenu
          selectedCategory={selectedCategory}
          toogleShowingBookMarks={toogleShowingBookMarks}
        />
        <BlogNews
          category={category}
          searchNews={searchNews}
          toggleModal={toggleModal}
          selectArticle={selectArticle}
        />
        <BlogListsPage className="blog-list" />
        {isModalPoP ? (
          <BlogModal
            className="modal"
            toggleModal={toggleModal}
            selectedArticle={selectedArticle}
            toogleShowingBookMarks={toogleShowingBookMarks}
          />
        ) : (
          ""
        )}
        {isShowBookMark && <SavedBookMarks toogleShowingBookMarks={toogleShowingBookMarks}/>}
        <Footer className="blog-footer" />
      </div>
    </div>
  );
};

export default BlogLayout;
