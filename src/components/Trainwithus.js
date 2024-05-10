import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/TrainWithUs.scss";
const Trainwithus = ({ TrainWithUsData }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === TrainWithUsData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? TrainWithUsData.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="gallery">
        <div className="gallerycarousel">
          <BsArrowLeftCircleFill
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {TrainWithUsData.map((curElem) => {
            return (
              <img
                src={curElem.image}
                key={curElem.id}
                className={
                  slide === curElem.id ? "slide" : "slide slide-hidden"
                }
              />
            );
          })}
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="arrow arrow-right"
          />
          <span className="indicators">
            {TrainWithUsData.map((curElem) => {
              return (
                <button
                  key={curElem.id}
                  className={
                    slide === curElem.id
                      ? "indicator"
                      : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(curElem.id)}
                ></button>
              );
            })}
          </span>
        </div>
        <div className="rightContainerGallery" data-aos="zoom-in">
          {TrainWithUsData.map((curElem) => {
            return (
              <div className="infoGallery">
                <div
                  key={curElem.id}
                  className={
                    slide === curElem.id
                      ? "slideHeading firstLetter"
                      : "slideHeading slideHeading-hidden"
                  }
                >
                  {curElem.name}
                </div>
                <div
                  key={curElem.id}
                  className={
                    slide === curElem.id
                      ? "slideDescription firstLetter"
                      : "slideDescription slideDescription-hidden"
                  }
                >
                  {curElem.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trainwithus;
