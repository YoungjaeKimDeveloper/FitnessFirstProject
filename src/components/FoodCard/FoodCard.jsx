import React, { useContext } from "react";
import "./FoodCard.css";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodCard = ({
  title,
  description,
  img,
  protein,
  price,
  food,
  addToCart,
}) => {
  const { cartLists } = useContext(CartContext);
  const notify = (food) =>
    toast(`${food.foodTitle} + "is added enjoy our meal! 🥳"`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "toast-message",
    });
  const addingCart = (food) => {
    addToCart(food);
    notify(food);
  };
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
            <FaCartPlus
              className="food-card-cartIcon"
              onClick={() => addingCart(food)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
