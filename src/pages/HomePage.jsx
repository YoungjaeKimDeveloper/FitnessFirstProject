import React, { useState } from "react";
import Header from "../components/Header/Header";
import HeroComponent from "../components/Hero/HeroComponent";
import FitnessProgramme from "../components/FitnessProgrammeLayout/FitnessProgrammeLayout";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const HomePage = () => {
  const [modal, setModal] = useState(true);
  const toggleModal = () => setModal((prev) => !prev);
  return (
    <div>
      {modal ? (
        <Modal />
      ) : (
        <>
          <HeroComponent />
          <FitnessProgramme />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
