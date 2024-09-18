import React from "react";
import Header from "../components/Header/Header";
import HeroComponent from "../components/Hero/HeroComponent";
import FitnessProgramme from "../components/FitnessProgrammeLayout/FitnessProgrammeLayout";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <FitnessProgramme />
      <Footer />
    </div>
  );
};

export default HomePage;
