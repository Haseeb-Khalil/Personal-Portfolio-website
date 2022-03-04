import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Haseeb.jpg";
import HeaderSocials from "./HeaderSocials";
import { BsArrowRightSquare } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Haseeb Khalil</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down <BsArrowRightSquare className="arrow__down" />
        </a>
      </div>
    </header>
  );
};

export default Header;
