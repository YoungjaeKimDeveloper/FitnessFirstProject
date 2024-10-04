import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import leftBackground from "../../../assets/diary.jpg";
import profilePic from "../../../../public/assets/blogListBackground.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./Writing.css";

const Writing = ({ toggleWritingPage, addDiary }) => {
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const toastSetting = {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const notify = (newDiary) => {
    switch (newDiary.mood) {
      case "happy":
        return toast(`${newDiary?.title} is added! 🥰`, toastSetting);
      case "sad":
        return toast(`${newDiary?.title} is added! 🥲`, toastSetting);
      case "bad":
        return toast(`${newDiary?.title} is added! 🤬`, toastSetting);
      default:
        return toast(`${newDiary?.title} is added!`, toastSetting);
    }
  };

  const [newDiary, setNewDiary] = useState({
    id: uuidv4(),
    title: "",
    content: "",
    date: today,
    mood: null,
  });

  const handleTitle = (newTitle) => {
    setNewDiary((prev) => ({ ...prev, title: newTitle }));
  };
  const handleContent = (newContent) => {
    setNewDiary((prev) => ({ ...prev, content: newContent }));
  };
  const handleDate = (newDate) => {
    setNewDiary((prev) => ({ ...prev, date: newDate }));
  };
  const handleMood = (newMood) => {
    setNewDiary((prev) => ({ ...prev, mood: newMood }));
  };

  const askUser = () => {
    const confirm = window.confirm("Do you want to go main page?");
    if (confirm) {
      toggleWritingPage();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addDiary(newDiary);
    notify(newDiary);
    setNewDiary({
      id: uuidv4(),
      title: "",
      content: "",
      date: today,
    });
    setTimeout(askUser, 3500);
  };

  console.log(newDiary);

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
        />
        <div className="profile">
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
        </div>
      </div>
      <div className="writing-right-contents-layout">
        <div className="right-contents-container">
          <form action="" className="data-form" onSubmit={onSubmit}>
            <label htmlFor="writing-title" className="writing-input">
              Title
              <input
                id="title"
                type="text"
                className="writing-title diary-input"
                placeholder="Write Your title.."
                value={newDiary.title}
                onChange={(e) => handleTitle(e.target.value)}
              />
            </label>
            <label htmlFor="content" className="writing-input">
              Content
              <input
                id="content"
                type="text"
                className="writing-content diary-input"
                placeholder="Share your story..."
                onChange={(e) => handleContent(e.target.value)}
                value={newDiary.content}
              />
            </label>
            <label htmlFor="date" className="writing-input">
              Date
              <input
                id="date"
                type="date"
                className="writing-content"
                onChange={(e) => handleDate(e.target.value)}
              />
            </label>
            <div className="emotion-selections">
              <label htmlFor="happy" className="emotion">
                Happy
                <input
                  type="radio"
                  value="happy"
                  id="happy"
                  name="mood"
                  onChange={(e) => handleMood(e.target.value)}
                />
              </label>
              <label htmlFor="sad" className="emotion">
                Sad
                <input
                  type="radio"
                  value="sad"
                  id="sad"
                  name="mood"
                  onChange={(e) => handleMood(e.target.value)}
                />
              </label>
              <label htmlFor="happy" className="emotion">
                Bad
                <input
                  type="radio"
                  value="happy"
                  id="happy"
                  name="mood"
                  onChange={(e) => handleMood(e.target.value)}
                />
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Save the Memory
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Writing;
