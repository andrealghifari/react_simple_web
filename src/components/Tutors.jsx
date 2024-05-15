import React from "react";
import "../styles/Tutors.css";
function Tutors(props) {
  return (
    <div className="tutor-list">
      {props.tutorsList.map((element, index) => {
        return (
          <div className="kartu-tutor" key={index}>
            <img src={element.image} alt="" />
            <p>{element.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tutors;
