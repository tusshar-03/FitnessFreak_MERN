import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <div className="title">
            <h1 className="firstLetter"> Freaks</h1>
          </div>
          <div className="theme">Leave No Gaps</div>
        </div>
        <main>
          <HashLink to={"/#home"}>Home</HashLink>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/Services"}>Gallery</Link>
          <Link to={"/Health"}>Health News</Link>
        </main>
      </nav>
    </div>
  );
};

export default Header;
