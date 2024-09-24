import React, { useState } from "react";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import HomePage from "./pages/HomePage";
import DietMarket from "./pages/DietMarket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/CartPage";
import { CartContext } from "./context/CartContext";
// Toast

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("protein");
  // CartLists && Cart Function
  const [cartLists, setCartLists] = useState([]);

  const addToCart = (item) => {
    const isExsisted = cartLists.some((listedItem) => listedItem == item);
    if (isExsisted) {
      item.quantity++;
    } else {
      setCartLists((prevItem) => [...prevItem, item]);
    }
  };

  const deleteItemCart = (item) => {
    const filteredItemLists = cartLists.filter(
      (cartList) => item.id !== cartList.id
    );
    setCartLists(filteredItemLists);
  };

  return (
    <CartContext.Provider value={{ cartLists, addToCart, deleteItemCart }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} index />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/market"
            element={
              <DietMarket
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
