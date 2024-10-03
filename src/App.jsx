import React, { useState } from "react";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartContext } from "./context/CartContext";
// Pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import DietMarket from "./pages/DietMarket";
import CartPage from "./pages/CartPage";
import WritingPage from "./pages/WritingPage";
import Uni from "./components/Temp/Uni";

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
          <Route path="/writingPage" element={<WritingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<Error />} />
          <Route path="plan" element={<Uni />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
