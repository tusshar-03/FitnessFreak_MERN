import React from "react";
import Cards from "./FunctionalityApi";
import Menucard from "./Menucard";
import Footer from "./Footer";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faPhone,
  faMessage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import fitnessimage from "../assets/fitnessimage.png";
import Fitnessdata from "./Fitnessdata";
import Rightcontainer from "./Rightcontainer";
import TrainWithUsData from "./TrainWithUsData";
import Trainwithus from "./Trainwithus";
import Boast from "./Boast";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <div className="quote">
            <div id="animation1">
              <FontAwesomeIcon
                icon={faDumbbell}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
            <h1 className=".firstLetter"> IT HAPPEN</h1>
            <div id="animation2">
              <FontAwesomeIcon
                icon={faDumbbell}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <p className="theme2" data-aos="fade-out">
            <div className="extraInfo">Get Bigger Stronger and Ripped !</div>
            <div className="extraInfo">
              We are described as the new revolution in the context of muscle
              building and strength training. Get yourself daily dose of
              essential nutritions and required training.
            </div>
          </p>
        </main>
      </div>
      <div className="home2Parent" data-aos="fade-out">
        <h1 className="firstLetter"> No Gaps</h1>
        <div className="home2">
          <Menucard Cards={Cards} />
        </div>
      </div>
      <section className="about" id="about">
        <div className="left-content" data-aos="fade-out">
          <div className="left-content-img">
            <img src={fitnessimage} alt="" />
            <div className="left-content-text">
              <h3 className="firstLetter">
                What
                <span className="firstLetter"> We</span>
                <br />
                Do
              </h3>
            </div>
          </div>
        </div>

        <div className="right-content" data-aos="fade-in">
          <Rightcontainer Fitnessdata={Fitnessdata} />
        </div>
      </section>
      <div className="trainsec" data-aos="fade-out">
        <h1 className="firstLetter"> With Us</h1>
        <Trainwithus TrainWithUsData={TrainWithUsData} />
      </div>
      <div className="home4">
        <Boast />
      </div>
      <div className="home5">
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default Home;
