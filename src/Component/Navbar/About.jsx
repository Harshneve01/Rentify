import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission and vision</p>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>Rentify</strong>, a platform built to make finding
          and booking homes simple, secure, and enjoyable. Whether you’re
          traveling for work, a holiday, or a family gathering, we connect you
          with the perfect stay at the right price.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to provide a hassle-free booking experience while helping hosts
          share their unique spaces with the world. Our goal is to build trust
          between guests and hosts through transparency, safety, and quality
          service.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Easy booking process</li>
          <li>✔️ Verified hosts & secure payments</li>
          <li>✔️ 24/7 customer support</li>
          <li>✔️ Wide range of properties to fit every budget</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to us at{" "}
          <a href="mailto:support@yourstay.com">support@yourstay.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
