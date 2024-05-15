import React from "react";
import "../styles/Partners.css";

function Partners(props) {
  return (
    <div className="partner-list">
      {props.partnersListSection.map((element,index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={element.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;
