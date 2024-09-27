import React from "react";
import leftBackground from "../assets/leftBackground.webp";
import profilePic from "../assets/rabbitFace.webp";
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
    </div>
  );
};

export default WritingPage;
