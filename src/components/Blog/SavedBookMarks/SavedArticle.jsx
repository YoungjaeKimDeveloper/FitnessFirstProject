import React from "react";
import sampleImg from "../../../assets/diary.jpg";
import { FaTrashAlt } from "react-icons/fa";
const SavedArticle = ({ toogleShowingBookMarks }) => {
  return (
    <div className="saved-article">
      <img
        src={sampleImg}
        alt="thumbNail"
        className="saved-article-thumbNail"
      />
      <div className="saved-article-details">
        <div className="saved-article-details-content">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <FaTrashAlt
          className="saved-article-details-bin"
          onClick={toogleShowingBookMarks}
        />
      </div>
    </div>
  );
};

export default SavedArticle;
