import React, { useState } from "react";
import "../styles/Testimonials.scss";
import { TestimonialsData } from "./TestimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialsData.length;
  const nextSlide = () => {
    setSelected(selected === tLength - 1 ? 0 : selected + 1);
  };

  const prevSlide = () => {
    setSelected(selected === 0 ? tLength - 1 : selected - 1);
  };
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{TestimonialsData[selected].review}</span> -
        {TestimonialsData[selected].status}
        <span>
          <span>{TestimonialsData[selected].name}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={TestimonialsData[selected].iamge} alt="" />
        <div className="arrows">
          <img src={leftArrow} alt="" onClick={prevSlide} />
          <img src={rightArrow} alt="" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
