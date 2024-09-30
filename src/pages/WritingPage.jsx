import React from "react";
import leftBackground from "../../src/assets/diary.jpg";
import profilePic from "../../public/assets//blogPart/dogFace.jpg";
import "./WritingPage.css";
const WritingPage = () => {
  return (
    <div className="writingPage-layout">
      <div className="leftbackGround-layout">
        <img
          src={leftBackground}
          alt="profile-pic"
          className="left-background"
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
          <label htmlFor="" className="writing-input">
            Upload Image
            <input type="file" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default WritingPage;
