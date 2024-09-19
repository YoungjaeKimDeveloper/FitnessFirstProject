import React, { useState, useRef } from "react";
import HeroComponent from "../components/Hero/HeroComponent";
import FitnessProgramme from "../components/FitnessProgrammeLayout/FitnessProgrammeLayout";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);
  const scrollPosition = useRef(0);

  const toggleModal = () => {
    if (!modal) {
      scrollPosition.current = window.pageYOffset;
    } else {
      window.scrollTo(0, scrollPosition.current);
    }

    setModal((prev) => !prev);
  };
  console.log("Selected Sprt", selectedSport);
  return (
    <div>
      <div>
        <HeroComponent />
        <FitnessProgramme
          toggleModal={toggleModal}
          setSelectedSport={setSelectedSport}
        />
        <Footer />
      </div>
      {modal && (
        <Modal toggleModal={toggleModal} selectedSport={selectedSport} />
      )}
    </div>
  );
};

export default HomePage;
