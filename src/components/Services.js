import React, { useState, useEffect } from "react";
import "../styles/Services.scss";
const Services = ({ ServiceData }) => {
  const [index, setIndex] = useState(0);
  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % ServiceData.length);
    }, 1500);
  }, [index]);

  return (
    <div className="gallery">
      <div className="carousel">
        {ServiceData.map((item) => {
          const indexLeft = mod(index - 1, ServiceData.length);
          const indexRight = mod(index + 1, ServiceData.length);

          let className = "cardgallery";
          // console.log("i - " + i);
          if (item.id === index) {
            className = "cardgallery cardgallery--active";
          } else if (item.id === indexRight) {
            className = "cardgallery cardgallery--right";
          } else if (item.id === indexLeft) {
            className = "cardgallery cardgallery--left";
          } else className = "cardgallery";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
