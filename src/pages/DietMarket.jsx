import React from "react";
import Sidbar from "../components/Sidebar/Sidbar";
import salmon from "../../public/assets/foods/salmon.jpg";
import meat from "../../public/assets/foods/meat.jpg";
import "./DietMarket.css";
const DietMarket = () => {
  return (
    <div className="dietMarket">
      <Sidbar className="dietMarket-sideBar" />
      <div className="food-cards">
        <div className="food-card">
          <img src={salmon} alt="salmon-img" className="food-card-img" />
          <div className="food-card-contents">
            <p>Salmon</p>
            <p>Description</p>
          </div>
        </div>
        <div className="food-card">
          <img src={meat} alt="salmon-img" className="food-card-img" />
          <div className="food-card-contents">
            <p>Meat</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietMarket;
