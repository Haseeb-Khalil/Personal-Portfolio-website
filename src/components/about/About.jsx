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
              <small>Three years at Capgemini</small>
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
            A driven and empathetic Software Engineer with a demonstrated
            ability to adapt and excel in dynamic environments. My strong
            communication, time management, and teamwork foundation empower me
            to deliver high-quality results in complex and challenging projects
            consistently. Fuelled by a passion for continuous learning, I
            actively engage in personal projects utilising Java (Spring Boot)
            and JavaScript (React) to enhance my skills further. This dedication
            to growth positions me to make impactful contributions to the
            ever-evolving technology landscape, delivering scalable and
            meaningful solutions that drive success.
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
