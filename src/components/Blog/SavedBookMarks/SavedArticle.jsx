import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SavedArticle.css";
const SavedArticle = ({
  toogleShowingBookMarks,
  title,
  description,
  urlToImage,
  url,
  deleteBookMarks,
}) => {
  const notify = (title) => toast(`"${title.slice(0, 30)}"... is deleted!😎`);

  const deleteArticleWithAlert = (title) => {
    deleteBookMarks(title);
    notify(title);
  };
  return (
    <div className="saved-article">
      <a href={url} target="_blank">
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
          onClick={() => deleteArticleWithAlert(title)}
        />
      </div>
    </div>
  );
};

export default SavedArticle;
