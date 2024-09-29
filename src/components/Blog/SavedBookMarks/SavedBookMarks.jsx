import React from "react";
import "./SavedBookMarks.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./SavedBookMarks.css";
import SavedArticle from "./SavedArticle";
const SavedBookMarks = ({
  toogleShowingBookMarks,
  addBookMarks,
  bookMarks,
  deleteBookMarks,
}) => {
  return (
    <div className="savedBookMarks-layout">
      <div className="savedBookMarks-layout-container">
        <IoIosArrowRoundBack
          className="back-icon"
          onClick={toogleShowingBookMarks}
        />

        {bookMarks.map((bookMark, indexKey) => (
          <SavedArticle
            key={indexKey}
            {...bookMark}
            deleteBookMarks={deleteBookMarks}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedBookMarks;
