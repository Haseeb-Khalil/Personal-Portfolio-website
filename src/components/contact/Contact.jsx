import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // For sending form details to the address
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5k8iyao",
      "template_g8tw4iq",
      form.current,
      "p3aYLn_01zAlx_4xf"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>haseeb.khalil3927@gmail.com</h5>
            <a
              href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x68;&#x61;&#x73;&#x65;&#x65;&#x62;&#x2e;&#x6b;&#x68;&#x61;&#x6c;&#x69;&#x6c;&#x33;&#x39;&#x32;&#x37;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;"
              target="_blank"
            >
              Send Email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Haseeb Khalil</h5>
            <a
              href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x6d;&#x2e;&#x6d;&#x65;&#x2f;&#x68;&#x61;&#x73;&#x65;&#x65;&#x62;&#x2e;&#x6b;&#x68;&#x61;&#x6c;&#x69;&#x6c;&#x2e;&#x37;&#x37;"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+44 123456789</h5>
            <a
              href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x61;&#x70;&#x69;&#x2e;&#x77;&#x68;&#x61;&#x74;&#x73;&#x61;&#x70;&#x70;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x73;&#x65;&#x6e;&#x64;&#x3f;&#x70;&#x68;&#x6f;&#x6e;&#x65;&#x3d;&#x2b;&#x34;&#x34;&#x37;&#x34;&#x36;&#x33;&#x36;&#x34;&#x36;&#x32;&#x38;&#x32;"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
