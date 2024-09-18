import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import "./Modal.css";
const Modal = ({ toggleModal }) => {
  const handleModal = (e) => {
    e.preventDefault();
    toggleModal();
  };
  return (
    <div className="modal-layout">
      <div className="modal">
        Modal
        <button onClick={(e) => handleModal(e)} className="back-btn">
          <IoMdArrowBack />
        </button>
      </div>
    </div>
  );
};

export default Modal;
