import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import leftBackground from "../../../assets/diary.jpg";
import profilePic from "../../../../public/assets/blogListBackground.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./Writing.css";

const Writing = ({ toggleWritingPage, addDiary }) => {
  const today = new Date().toISOString().split("T")[0];
  const [newDiary, setNewDiary] = useState({
    id: uuidv4(),
    title: "",
    content: "",
    date: today,
    image: null,
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
  const handleImg = (event) => {
    setNewDiary((prev) => ({ ...prev, image: event.target.files[0] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("id", newDiary.id);
    formData.append("title", newDiary.title);
    formData.append("content", newDiary.content);
    formData.append("date", newDiary.date);
    formData.append("image", newDiary.image);
    formData.append("mood", newDiary.mood);

    addDiary(formData);
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
            <label
              htmlFor="image-file"
              className="writing-input writing-input-image"
            >
              Upload Image
              <input
                type="file"
                id="image-file"
                className="input-image"
                onChange={(e) => handleImg(e)}
              />
            </label>
            <button type="submit">Save the Memory</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Writing;
