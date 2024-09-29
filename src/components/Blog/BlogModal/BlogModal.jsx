import React, { useState } from "react";
import { FaBookmark, FaLeaf } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./BlogModal.css";
const BlogModal = ({
  toggleModal,
  selectedArticle,
  toogleShowingBookMarks,
  addBookMarks,
  bookMarks,
}) => {
  const { id, title, description, urlToImage, url } = selectedArticle;
  // Check if the article is stored in the bookMarks

  const isIncluded = bookMarks.some(
    (bookMark) => bookMark.title === selectedArticle.title
  );

  const notify = (title) => toast(`"${title.slice(0, 30)}"... is marked!😎`);

  const addBookMarksAndAlert = (selectedArticle) => {
    addBookMarks(selectedArticle);
    notify(selectedArticle.title);
  };

  return (
    <div className="blog-modal">
      <div className="blog-modal-container">
        <IoIosArrowRoundBack className="back-icon" onClick={toggleModal} />
        <img src={urlToImage} alt="modal-img" className="blog-modal-img" />
        <div className="blog-modal-container-right">
          <h2 className="blog-modal-title">{title}</h2>
          <p className="blog-modal-description">{description}</p>
        </div>
        <div className="blog-modal-functions">
          <a target="_blank" href={url} className="blog-modal-functions-btn ">
            Read more
          </a>
          {isIncluded ? (
            <FaBookmark className="blog-modal-bookMarker-icon" />
          ) : (
            <CiBookmark
              className="blog-modal-bookMarker-icon"
              onClick={() => addBookMarksAndAlert(selectedArticle)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
