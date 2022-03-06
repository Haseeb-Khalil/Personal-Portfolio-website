import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        HASEEB
      </a>

      {/* Page links */}
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Social Profiles */}
      <div className="footer__socials">
        <a
          href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x77;&#x77;&#x77;&#x2e;&#x66;&#x61;&#x63;&#x65;&#x62;&#x6f;&#x6f;&#x6b;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x68;&#x61;&#x73;&#x65;&#x65;&#x62;&#x2e;&#x6b;&#x68;&#x61;&#x6c;&#x69;&#x6c;&#x2e;&#x37;&#x37;"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x77;&#x77;&#x77;&#x2e;&#x69;&#x6e;&#x73;&#x74;&#x61;&#x67;&#x72;&#x61;&#x6d;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x68;&#x61;&#x73;&#x33;&#x33;&#x62;&#x5f;&#x6d;&#x61;&#x6c;&#x69;&#x6b;&#x2f;"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x74;&#x77;&#x69;&#x74;&#x74;&#x65;&#x72;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x48;&#x61;&#x73;&#x65;&#x65;&#x62;&#x32;&#x34;&#x39;&#x31;&#x39;&#x39;&#x34;&#x33;"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Haseeb's Personal Website. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
