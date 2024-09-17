import React, { useState } from "react";
import "./HeroComponent.css";
import mainVideo from "../../../public/assets/hero-video.mp4";
const HeroComponent = () => {
  const [isOnHover, setIsOnHover] = useState(false);

  return (
    <div className="hero-section">
      <video src={mainVideo} autoPlay muted loop className="main-hero-video" />
      <button
        onMouseLeave={() => setIsOnHover((prev) => !prev)}
        onMouseOver={() => setIsOnHover((prev) => !prev)}
      >
        {isOnHover ? "Change Your Life" : "Do It now"}
      </button>
    </div>
  );
};

export default HeroComponent;
