import React from "react";
import Header from "../components/Header/Header";
import HeroComponent from "../components/Hero/HeroComponent";
import FitnessProgramme from "../components/FitnessProgrammeLayout/FitnessProgrammeLayout";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <FitnessProgramme />
    </div>
  );
};

export default HomePage;
