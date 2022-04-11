import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Booster App",
    github: "https://github.com/Haseeb3927/Booster",
    demo: "https://cyf-booster.herokuapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Video Recommendation App",
    github: "https://github.com/Haseeb3927/Full-Stack-Project-Assessment",
    demo: "https://haseeb-video-recommendation.herokuapp.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather App",
    github: "https://github.com/Haseeb3927/Weather-App",
    demo: "https://haseeb-weather-app.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Tv Shows",
    github: "https://github.com/Haseeb3927/tv-show-dom-project",
    demo: "https://cyf-haseeb3927-tv.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "CYF Hotel",
    github: "https://github.com/Haseeb3927/cyf-hotel-react",
    demo: "https://cyf-haseeb3927-hotel-react.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Baby Names",
    github: "https://github.com/Haseeb3927/baby-names-react",
    demo: "https://cyf-haseeb3927-baby-names.netlify.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Numbers Facts",
    github: "https://github.com/Haseeb3927/Numbers-Facts",
    demo: "https://haseeb-numbers-facts.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
