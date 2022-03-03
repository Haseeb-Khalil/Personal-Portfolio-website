import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UX UI DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>UI UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
          </ul>
        </article>
        {/*WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                aut!
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
