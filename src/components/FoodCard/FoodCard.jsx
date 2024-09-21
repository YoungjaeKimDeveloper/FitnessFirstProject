import React from "react";
import "./FoodCard.css";
const FoodCard = ({ title, description, img, protein }) => {
  return (
    <div className="food-cards">
      <div className="food-card">
        <img src={img} alt="salmon-img" className="food-card-img" />
        <div className="food-card-contents">
          <p className="food-title">{title}</p>
          <p className="food-description">{description}</p>
          <p>{protein}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
