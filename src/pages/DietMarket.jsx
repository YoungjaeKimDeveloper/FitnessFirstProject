import React from "react";
import Sidbar from "../components/Sidebar/Sidbar";
import foods from "../../json/foods.json";
import "./DietMarket.css";
import FoodCard from "../components/FoodCard/FoodCard";
const DietMarket = () => {
  const filteredFoodList = foods.filter(
    (food, index) => food.category === "Protein"
  );
  return (
    <div className="dietMarket">
      <Sidbar className="dietMarket-sideBar" />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietMarket;
