import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import "./Hero.css";

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-back",
      offset: 10,
    });
  }, []);

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", form.current, "public_key")
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero">
      <div className="left" data-aos="fade-right">
        <div className="left-content">
          <h3 data-aos="fade-right">EFFORTLESS BUSINESS GROWTH</h3>
          <h1 data-aos="fade-right" data-aos-delay="100">
            WE GENERATE <br /> QUOTE-READY <br /> LEADS FOR YOU
          </h1>
          <p data-aos="fade-right" data-aos-delay="100">
            NO HEAVY LIFTING REQUIRED
          </p>
        </div>
      </div>
      <div className="right">
        <div className="bar" data-aos="fade-left">
          <form
            ref={form}
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2>Get 5 New Quote-Ready Leads Now</h2>
            <p>WITHIN 30 DAYS, OR YOU DON'T PAY</p>
            <div className="name">
              <div className="fname">
                <label>First Name *</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
              <div className="fname">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter Your Last Name"
                  required
                />
              </div>
            </div>
            <div className="email">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="phone-num">
              <div className="code">
                <label>Code *</label>
                <input type="number" name="code" placeholder="+917" required />
              </div>
              <div className="phone">
                <label>Phone Number *</label>
                <input
                  type="number"
                  name="phone_number"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="company">
              <label>Company *</label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <button type="submit" value="Send">
              Get More Leads!
            </button>
            {submitted && (
              <p>
                Thanks for submitting! Your message has been recorded. Our team
                will get back to you.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
