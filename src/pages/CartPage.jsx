import React, { useContext } from "react";
import "./CartPage.css";
import foods from "../../json/foods.json";
import { CartContext } from "../context/CartContext";
const CartPage = () => {
  // Calculate the total Price logic
  const { cartLists } = useContext(CartContext);
  const calTotalPrice = (prev, next) => prev + next.price;
  const totalPrice = cartLists.reduce(calTotalPrice, 0);
  // Calculate the total Quantity
  const calQuantity = (prev, next) => prev + next.quantity;
  const totalQuantity = cartLists.reduce(calQuantity, 0);
  const payment = totalPrice * totalQuantity;
  return (
    <div className="cartPage-layout">
      <div className="cartPage-Container">
        <h1>Cart List</h1>
        <table className="cart-list-table">
          {/* Table Head Part */}
          <tr>
            <th>No</th>
            <th>ThumbNail</th>
            <th>ItemName</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartLists.map((shoppingList, index) => (
            <>
              <tr>
                <td className="cartLists-index">{index + 1}</td>
                <td>
                  <img
                    src={shoppingList.img}
                    alt="thumbNail"
                    className="cart-thumbNail"
                  />
                </td>
                <td className="foodName">{shoppingList.foodTitle}</td>
                <td>{shoppingList.quantity}</td>
                <td>${shoppingList.price * shoppingList.quantity}</td>
              </tr>
            </>
          ))}
          {cartLists.length > 1 && (
            <>
              <tr className="total">
                <td className="total"></td>
                <td className="total"></td>
                <td></td>
                <td>{totalQuantity}</td>
                <td>${payment}</td>
              </tr>
            </>
          )}
        </table>
        {cartLists.length < 1 && (
          <div className="cartIsEmpty-Message">
            <p>Cart is Empty...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
