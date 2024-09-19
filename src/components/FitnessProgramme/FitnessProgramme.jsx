import React from "react";
import "./FitnessProgramme.css";

const FitnessProgramme = ({
  title,
  img,
  description,
  isOpposite,
  toggleModal,
  major,
  setSelectedSport,
}) => {
  const addToogle = (sport) => {
    toggleModal(), setSelectedSport(sport);
  };
  return (
    <div className="programme">
      {isOpposite ? (
        <>
          <div className="programme-description">
            <h1>{title}</h1>
            <p>{description}</p>
            <button
              className="finding-trainer"
              onClick={() => addToogle(major)}
            >
              Find Trainer
            </button>
          </div>
          <img src={img} alt="" className="programme-pic" />
        </>
      ) : (
        <>
          <img src={img} alt="" className="programme-pic" />
          <div className="programme-description">
            <h1>{title}</h1>
            <p>{description}</p>
            <button
              className="finding-trainer"
              onClick={() => addToogle(major)}
            >
              Find Trainer
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FitnessProgramme;
