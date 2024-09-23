import React, { useState } from "react";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import HomePage from "./pages/HomePage";
import DietMarket from "./pages/DietMarket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { CartContext } from "./context/CartContext";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("protein");
  const shoppingCart = [];

  return (
    <CartContext.Provider value={shoppingCart}>
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
