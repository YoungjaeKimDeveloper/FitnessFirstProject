import React from "react";
import "./TrainerCard.css";
const TrainerCard = ({ img, name, experience, description }) => {
  return (
    <div className="coachCard">
      <img src={img} alt="" className="coachImage" />
      <div className="coachCard-Description">
        <div>
          <p className="coach-Name">{name}</p>
          <p className="coach-Experience">{experience} years</p>
        </div>
        <p className="coach-Description">{description}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
