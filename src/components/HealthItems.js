import React from "react";
import "../styles/HealthItems.scss";
import defaultImage from "../assets/defaultHealthImage.webp";
const HealthItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="healthContainer" data-aos="fade-left">
      <img
        src={!imageUrl ? defaultImage : imageUrl}
        className="healthCardIamge"
        alt="..."
      />
      <div className="cardBody">
        <h5 className="cardTitle">
          {title.length <= 150
            ? title.concat("..")
            : title.slice(0, 150).concat("..")}
        </h5>
      </div>
      <div className="cardBody2" data-aos="zoom-in-up">
        <p className="cardTextDesc">
          {description
            ? description.slice(0, 150).concat("..")
            : " Sorry ! We don't have any description to show for this news .. Please click on the read more button to Know more.."}
        </p>
        <p className="cardTextContent">
          <small className="textMuted firstLetter">
            By {!author ? "Unknown" : author} on{" "}
            {new Date(date).toLocaleString()}
          </small>
        </p>
        <a
          rel="noreferrer"
          href={newsUrl}
          target="_blank"
          className="firstLetter"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default HealthItems;
