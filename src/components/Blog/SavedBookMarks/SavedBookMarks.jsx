import React from "react";
import "./SavedBookMarks.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./SavedBookMarks.css";
import SavedArticle from "./SavedArticle";
const SavedBookMarks = ({ toogleShowingBookMarks }) => {
  return (
    <div className="savedBookMarks-layout">
      <div className="savedBookMarks-layout-container">
        <IoIosArrowRoundBack
          className="back-icon"
          onClick={toogleShowingBookMarks}
        />
        <SavedArticle toogleShowingBookMarks={toogleShowingBookMarks} />
        <SavedArticle />
        <SavedArticle />
        <SavedArticle />
      </div>
    </div>
  );
};

export default SavedBookMarks;
