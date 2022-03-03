import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/testimonial1.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// FAKE Reviews Data

const data = [
  {
    avatar: Image1,
    name: "Client's Name1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores facilis dolore voluptates voluptas eius iure quas earum corrupti laudantium quisquam!",
  },
  {
    avatar: Image1,
    name: "Client's Name2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores facilis dolore voluptates voluptas eius iure quas earum corrupti laudantium quisquam!",
  },
  {
    avatar: Image1,
    name: "Client's Name3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores facilis dolore voluptates voluptas eius iure quas earum corrupti laudantium quisquam!",
  },
  {
    avatar: Image1,
    name: "Client's Name4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores facilis dolore voluptates voluptas eius iure quas earum corrupti laudantium quisquam!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="clients-avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
