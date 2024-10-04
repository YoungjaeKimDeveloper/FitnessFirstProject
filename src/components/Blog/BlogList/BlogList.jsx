import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

import "./BlogList.css";
import defaultBG from "../../../assets/diary.jpg";
import defaultBG2 from "../../../assets/love.jpg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogList = ({
  id,
  title,
  content,
  date,
  mood,
  img,
  deleteJob,
  toggleClicked,
}) => {
  const backgroundLists = [defaultBG, defaultBG2];
  const randomNumber = Math.ceil(Math.random() * backgroundLists.length - 1);
  const defaultBg = backgroundLists[randomNumber];
  const notify = (title) => toast(`${title} is deleted`);
  const deleteContent = (id, title) => {
    notify(title);
    deleteJob(id);
    toggleClicked();
  };
  return (
    <div className="blog-lists-layout-list">
      <img
        src={img || defaultBg}
        // src={img}
        alt="blog-background-image"
        className="blog-background-image"
      />
      <div className="blog-list-content">
        <h1 className="blog-list-content-title">{title}</h1>
        <div className="second-container">
          <div>
            <p className="blog-list-content-details">{content}</p>
            <p className="blog-list-content-mood">{mood}</p>
          </div>
          <div>
            <p className="blog-list-content-date">{date}</p>
            <IoTrashBinOutline onClick={() => deleteContent(id, title)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
