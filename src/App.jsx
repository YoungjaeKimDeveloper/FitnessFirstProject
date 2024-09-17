import React from "react";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
