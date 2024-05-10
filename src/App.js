import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ServiceData from "./components/ServiceData";
import Services from "./components/Services";
import Health from "./components/Health";
import LoadingBar from "react-top-loading-bar";
import Contact from "./components/Contact";
// CSS IMPORTS
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Menucard.scss";
import "./styles/contact.scss";
// c1eecd5c46d54f70855eb527d6645754
// import "./styles/Services.scss";
const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <Header />
      <LoadingBar height={3} color="rgb(17 64 250)" progress={progress} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Services"
          element={<Services ServiceData={ServiceData} />}
        />
        <Route
          path="/Health"
          element={
            <Health
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
