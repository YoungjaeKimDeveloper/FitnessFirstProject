import React from "react";
import leftBackground from "../../../assets/diary.jpg";
import profilePic from "../../../../public/assets/blogListBackground.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";

import "./Writing.css";
const Writing = ({ toggleWritingPage, setWritingObject }) => {
  return (
    <div className="writingPage-layout">
      <div className="leftbackGround-layout">
        <IoIosArrowRoundBack
          className="back-btn back-btn-xl"
          onClick={toggleWritingPage}
        />
        <img
          src={leftBackground}
          alt="profile-pic"
          className="left-background"
          onChange={(e)=>setWritingObject()}
        />
        <div className="profile">
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
        </div>
      </div>
      <div className="writing-right-contents-layout">
        <div className="right-contents-container">
          <label for="writing-title" className="writing-input">
            Title
            <input
              id="title"
              type="text"
              className="writing-title diary-input"
              placeholder="Write Your title.."
            />
          </label>
          <label for="content" className="writing-input">
            Content
            <input
              id="content"
              type="text"
              className="writing-content diary-input"
              placeholder="Share your story..."
            />
          </label>
          <label for="date" className="writing-input">
            Date
            <input id="date" type="date" className="writing-content" />
          </label>
          <div className="emotion-selections">
            <lable for="happy" className="emotion">
              Happy
              <input type="radio" value="happy" id="happy" name="mood" />
            </lable>
            <lable for="sad" className="emotion">
              Sad
              <input type="radio" value="sad" id="sad" name="mood" />
            </lable>
            <lable for="happy" className="emotion">
              Bad
              <input type="radio" value="happy" id="happy" name="mood" />
            </lable>
          </div>
          <label for="image-file" className="writing-input writing-input-image">
            Upload Image
            <input type="file" id="image-file" className="input-image" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Writing;
