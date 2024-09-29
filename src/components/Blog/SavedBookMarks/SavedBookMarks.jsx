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
  const isBookMarkedEmpty = bookMarks.length == 0;
  return (
    <div className="savedBookMarks-layout">
      <div className="savedBookMarks-layout-container">
        {isBookMarkedEmpty ? (
          <div className="empty-container">
            <p className="empty-text">Is EMPTY...</p>
            <IoIosArrowRoundBack
              className="back-icon"
              onClick={toogleShowingBookMarks}
            />
          </div>
        ) : (
          <>
            <IoIosArrowRoundBack
              className="back-icon"
              onClick={toogleShowingBookMarks}
            />

            {bookMarks.map((bookMark, indexKey) => (
              <SavedArticle
                key={indexKey}
                id={bookMark.id}
                {...bookMark}
                deleteBookMarks={deleteBookMarks}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SavedBookMarks;
