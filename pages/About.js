import React from 'react';
import Styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>About Us</h1>
      <p className={Styles.paragraph}>
        Welcome to our website! We are a team of dedicated professionals committed to providing exceptional service and quality products. Our mission is to deliver innovative solutions that meet the needs of our clients and exceed their expectations.
      </p>
      <h2 className={Styles.subheading}>Our Mission</h2>
      <p className={Styles.paragraph}>
        Our mission is to enhance the lives of our customers by offering top-notch products and services that are both reliable and affordable. We strive to be the best in our field by focusing on customer satisfaction and continuous improvement.
      </p>
      <h2 className={Styles.subheading}>Our Team</h2>
      <p className={Styles.paragraph}>
        Our team consists of experts from various fields who bring their skills and experience to the table. We work collaboratively to achieve our goals and ensure that every project is a success.
      </p>
    </div>
  );
};

export default About;
