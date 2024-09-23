import React from "react";
import "./CartPage.css";
import foods from "../../json/foods.json";
const CartPage = () => {
  const shoppingLists = ["ProtenBar1", "ProtenBar2", "ProtenBar3"];

  return (
    <div className="cartPage-layout">
      <div className="cartPage-Container">
        <h1>Cart List</h1>

        {foods.slice(0, 5).map((shoppingList, index) => (
          <>
            <li key={index} className="food-item">
              {index + 1}.{shoppingList.foodTitle}
              <img
                src={shoppingList.img}
                alt="alt-img"
                className="food-item-img"
              />
            </li>
          </>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
