import React from "react";
import "../styles/rightcontent.scss";
const Rightcontainer = ({ Fitnessdata }) => {
  return (
    <div className="rightContainer">
      {Fitnessdata.map((curElem) => {
        return (
          <div className="exercise">
            <div className="fitness-image">
              <img src={curElem.image} alt="" />
            </div>
            <div className="exerciseContent">
              <h2 className="firstLetter">{curElem.name}</h2>
              <p>{curElem.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rightcontainer;
