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
              <small>One year with CodeYourFuture</small>
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
            As an empathetic, hardworking employee in different environments, I
            have developed excellent communication, time management, and
            team-working skills. Recently graduated from Code Your Future as a
            Full Stack Web Developer, I am now looking for a junior web
            development role where I can continue to strengthen my skills.
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
