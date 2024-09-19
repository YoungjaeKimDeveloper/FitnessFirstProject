import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import "./Modal.css";
import coachLists from "/Users/youngjaekim/Desktop/webDeveloper/ING/fitnessProject/fitnessFirst/json/coachLists.json";
import TrainerCard from "../TrainerCard/TrainerCard";
const Modal = ({ toggleModal, selectedSport }) => {
  const handleModal = (e) => {
    e.preventDefault();
    toggleModal();
  };
  const filteredCoachList = coachLists.filter(
    (coach) => coach.major == selectedSport
  );
  return (
    <div className="modal-layout">
      <div className="trainer-layout">
        {filteredCoachList.map((coachlist, index) => (
          <TrainerCard
            key={index}
            name={coachlist.name}
            description={coachlist.description}
            experience={coachlist.carrer}
            img={coachlist.img}
          />
        ))}
        <button onClick={(e) => handleModal(e)} className="back-btn">
          <IoMdArrowBack />
        </button>
      </div>
    </div>
  );
};

export default Modal;
