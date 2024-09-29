import React from "react";
import sampleImg from "../../../assets/diary.jpg";
import { FaTrashAlt } from "react-icons/fa";
const SavedArticle = ({
  toogleShowingBookMarks,
  title,
  description,
  urlToImage,
  url,
  deleteBookMarks,
  id,
}) => {
  return (
    <div className="saved-article">
      <a href={url}>
        <img
          src={urlToImage}
          alt="thumbNail"
          className="saved-article-thumbNail"
        />
      </a>
      <div className="saved-article-details">
        <div className="saved-article-details-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <FaTrashAlt
          className="saved-article-details-bin"
          onClick={() => deleteBookMarks(id)}
        />
      </div>
    </div>
  );
};

export default SavedArticle;
