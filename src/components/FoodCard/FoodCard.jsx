import React from "react";
import "./FoodCard.css";
import { FaCartPlus } from "react-icons/fa";
const FoodCard = ({ title, description, img, protein, price }) => {
  return (
    <div className="food-cards">
      <div className="food-card">
        <img src={img} alt="salmon-img" className="food-card-img" />
        <div className="food-card-contents">
          <p className="food-title">{title}</p>
          <p className="food-description">{description}</p>

          <p>{protein}</p>
          <div className="price-cart">
            <p>Price:${price}</p>
            <FaCartPlus className="food-card-cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
