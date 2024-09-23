import React from "react";
import "./CartPage.css";
import foods from "../../json/foods.json";
const CartPage = () => {
  const tempFoodsLists = foods.slice(0, 5);
  const calTotalPrice = (prev, next) => prev + next.price;
  const total = tempFoodsLists.reduce(calTotalPrice, 0);
  return (
    <div className="cartPage-layout">
      <div className="cartPage-Container">
        <h1>Cart List</h1>
        <table className="cart-list-table">
          {/* Table Head Part */}
          <tr>
            <th>No</th>
            <th>ItemName</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {tempFoodsLists.map((shoppingList, index) => (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{shoppingList.foodTitle}</td>
                <td>1</td>
                <td>${shoppingList.price}</td>
              </tr>
            </>
          ))}

          <tr className="total">
            <td className="total"></td>
            <td className="total"></td>
            <td>40</td>
            <td>${total}</td>
          </tr>
        </table>
        {/* {foods.slice(0, 5).map((shoppingList, index) => (
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
        ))} */}
      </div>
    </div>
  );
};

export default CartPage;
