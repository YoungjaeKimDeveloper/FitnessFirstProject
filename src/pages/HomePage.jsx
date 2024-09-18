import React, { useState, useRef } from "react";
import Header from "../components/Header/Header";
import HeroComponent from "../components/Hero/HeroComponent";
import FitnessProgramme from "../components/FitnessProgrammeLayout/FitnessProgrammeLayout";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const scrollPosition = useRef(0);
  const toggleModal = () => {
    if (!modal) {
      scrollPosition.current = window.pageYOffset;
    } else {
      window.scrollTo(0, scrollPosition.current);
    }
    setModal((prev) => !prev);
  };
  return (
    <div>
      <div>
        <HeroComponent />
        <FitnessProgramme toggleModal={toggleModal} />
        <Footer />
      </div>
      {modal ? <Modal toggleModal={toggleModal} /> : <div></div>}
    </div>
  );
};

export default HomePage;
