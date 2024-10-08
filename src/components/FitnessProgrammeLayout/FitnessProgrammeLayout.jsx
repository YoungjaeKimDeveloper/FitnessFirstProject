import React from "react";
import "./FitnessProgrammeLayout.css";
import FitnessProgramme from "../FitnessProgramme/FitnessProgramme";
import courses from "../../../json/courses.json";
const FitnessProgrammeLayout = ({ toggleModal, setSelectedSport }) => {
  return (
    <div className="fitness-Programme-Layout">
      <h1 className="fitness-Programme-Layout-title">Our Programme</h1>
      {courses.map((course, index) => (
        <FitnessProgramme
          key={index}
          title={course.title}
          img={course.img}
          description={course.description}
          isOpposite={course.isOpposite}
          toggleModal={toggleModal}
          major={course.major}
          setSelectedSport={setSelectedSport}
        />
      ))}
    </div>
  );
};

export default FitnessProgrammeLayout;
