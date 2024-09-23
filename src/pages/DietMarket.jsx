import React, { useContext } from "react";
import Sidbar from "../components/Sidebar/Sidbar";
import foods from "../../json/foods.json";
import "./DietMarket.css";
import FoodCard from "../components/FoodCard/FoodCard";
import { CartContext } from "../context/CartContext";
const DietMarket = ({ setSelectedCategory, selectedCategory }) => {
  const { addToCart } = useContext(CartContext);
  const filteredFoodList = foods.filter(
    (food, index) => food.category === selectedCategory
  );
  return (
    <div className="dietMarket">
      <Sidbar
        className="dietMarket-sideBar"
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="food-cards-container">
        <div className="food-cards">
          {filteredFoodList.map((food, index) => (
            <FoodCard
              title={food.foodTitle}
              description={food.description}
              img={food.img}
              key={index}
              protein={food.protein}
              price={food.price}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietMarket;
