import React from "react";
import Header from "./components/Header/Header";
import Error from "./components/ErrorComponent/Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<Error />} />
        <Route path="/home" element={<div>Hello</div>} />
      </Routes>
    </Router>
  );
};

export default App;
