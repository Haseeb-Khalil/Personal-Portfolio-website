import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x77;&#x77;&#x77;&#x2e;&#x6c;&#x69;&#x6e;&#x6b;&#x65;&#x64;&#x69;&#x6e;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x69;&#x6e;&#x2f;&#x68;&#x61;&#x73;&#x65;&#x65;&#x62;&#x2d;&#x6b;&#x68;&#x61;&#x6c;&#x69;&#x6c;&#x2d;&#x30;&#x34;&#x30;&#x35;&#x39;&#x61;&#x32;&#x30;&#x31;&#x2f;"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x67;&#x69;&#x74;&#x68;&#x75;&#x62;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x48;&#x61;&#x73;&#x65;&#x65;&#x62;&#x33;&#x39;&#x32;&#x37;"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x77;&#x77;&#x77;&#x2e;&#x63;&#x6f;&#x64;&#x65;&#x77;&#x61;&#x72;&#x73;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x75;&#x73;&#x65;&#x72;&#x73;&#x2f;&#x48;&#x61;&#x73;&#x65;&#x65;&#x62;&#x33;&#x39;&#x32;&#x37;"
        target="_blank"
        rel="noreferrer"
      >
        <SiCodewars />
      </a>
    </div>
  );
};

export default HeaderSocials;
