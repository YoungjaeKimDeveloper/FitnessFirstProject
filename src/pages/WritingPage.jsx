import React from "react";
import leftBackground from "../assets/leftBackground.webp";
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
      <div className="writing-right-contents">
        <label for="writing-title">
          Title
          <input id="title" type="text" className="writing-title" />
        </label>
        <label for="content">
          Content
          <input id="content" type="text" className="writing-content" />
        </label>
        <label for="date">
          Date
          <input id="date" type="date" className="writing-content" />
        </label>
        <lable for="happy">
          Happy
          <input type="radio" value="happy" id="happy" name="mood" />
        </lable>
        <lable for="sad">
          Sad
          <input type="radio" value="sad" id="sad" name="mood" />
        </lable>
        <lable for="happy">
          Happy
          <input type="radio" value="happy" id="happy" name="mood" />
        </lable>
        <label htmlFor="">
          Upload Image
          <input type="file" />
        </label>
      </div>
    </div>
  );
};

export default WritingPage;
