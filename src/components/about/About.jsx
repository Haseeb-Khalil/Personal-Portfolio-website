import React from "react";
import "./about.css";
import IMAGE from "../../assets/Laptop.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMAGE} alt="laptop" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>

              {/* ADD EXPERIENCE INFO */}
              <small>__Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>

              {/* ADD CLIENTS INFO */}
              <small>Looking for clients</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>

              {/* ADD CLIENTS INFO */}
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            totam qui in animi cum placeat possimus dignissimos, quidem tempore
            sapiente sint dolorem a ad accusantium, vel id molestias fuga
            explicabo.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
