import React, { useContext } from "react";
import "./CartPage.css";

import { CartContext } from "../context/CartContext";
import { MdCancel } from "react-icons/md";
const CartPage = () => {
  // Calculate the total Price logic
  const { cartLists } = useContext(CartContext);
  const calTotalPrice = (prev, next) => prev + next.price * next.quantity;
  const totalPrice = cartLists.reduce(calTotalPrice, 0);
  // Calculate the total Quantity
  const calQuantity = (prev, next) => prev + next.quantity;
  const totalQuantity = cartLists.reduce(calQuantity, 0);
  const { deleteItemCart } = useContext(CartContext);

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
            <th>Price Per Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartLists.map((shoppingList, index) => (
            <>
              <tr>
                <td className="cartLists-index">{index + 1}</td>
                <td className="item-blank">
                  <img
                    src={shoppingList.img}
                    alt="thumbNail"
                    className="cart-thumbNail"
                  />
                </td>
                <td className="foodName">{shoppingList.foodTitle}</td>
                <td className="food-price">${shoppingList.price}</td>
                <td>{shoppingList.quantity}</td>
                <td>${shoppingList.price * shoppingList.quantity}</td>
                <td>
                  <MdCancel
                    className="delete-btn"
                    key={shoppingList.id}
                    onClick={() => deleteItemCart(shoppingList)}
                  />
                </td>
              </tr>
            </>
          ))}
          {cartLists.length >= 1 && (
            <>
              <tr className="total">
                <td className="total-span" colSpan={4}>
                  Total
                </td>

                <td>{totalQuantity}</td>
                <td colSpan={2}>${totalPrice}</td>
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
