import React from "react";
import "../styles/Boast.scss";
import boast_img from "../assets/hero_image.png";
import boast_img_back from "../assets/hero_image_back.png";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 3 };
const Boast = () => {
  return (
    <div className="boast" data-aos="fade-out">
      <div className="blur boast-blur"></div>
      <div className="left-h">
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club of the City</span>
        </div>
        <div className="boast-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>Body</div>
          <div>
            <span>
              It's not about being the best, it's about being better than you
              were yesterday. Join us on this journey to a healthier, stronger,
              and more confident you.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+25</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+400</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+20</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="boast-buttons">
          <button className="boastbtn">Get Started</button>
          <button className="boastbtn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <img src={boast_img} className="boast-image" />
        <motion.img
          initial={{ right: "20rem" }}
          whileInView={{ right: "30rem" }}
          transition={transition}
          src={boast_img_back}
          className="boast-image-back"
        />
      </div>
    </div>
  );
};

export default Boast;
