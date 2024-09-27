import React, { useState } from "react";
import { FaBookmark, FaLeaf } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";

import sampleImg from "../../../assets/diary.jpg";
import "./BlogModal.css";
const BlogModal = ({ toggleModal, selectedArticle }) => {
  // Img
  // title
  // Descriptionap
  // BookMark BTN
  const { title, description, urlToImage, url } = selectedArticle;
  //Temp
  const [isBookMarked, setIsBookMarked] = useState(false);

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
          {isBookMarked ? (
            <FaBookmark className="blog-modal-bookMarker-icon" />
          ) : (
            <CiBookmark className="blog-modal-bookMarker-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
