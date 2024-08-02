import React from 'react';
import Styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.hero}>
        <h1 className={Styles.heading}>About Dev. Dossier</h1>
        <p className={Styles.subheading}>Empowering Developers with Knowledge</p>
      </div>
      <section className={Styles.content}>
        <div className={Styles.section}>
          <h2 className={Styles.title}>Our Story</h2>
          <p className={Styles.text}>
            Welcome to Dev. Dossier! We started as a group of passionate developers who wanted to share our expertise with the tech community. Our goal is to create a space where developers of all levels can find valuable information, learn new skills, and stay updated with the latest industry trends.
          </p>
        </div>
        <div className={Styles.section}>
          <h2 className={Styles.title}>Our Mission</h2>
          <p className={Styles.text}>
            Our mission is to provide high-quality, insightful content that helps developers enhance their skills and stay on top of the rapidly evolving tech landscape. We are committed to fostering a supportive community where learning and collaboration are at the forefront.
          </p>
        </div>
        <div className={Styles.section}>
          <h2 className={Styles.title}>What We Offer</h2>
          <p className={Styles.text}>
            On Dev. Dossier, you'll find a range of resources including in-depth tutorials, practical tips, and insights into various programming languages and technologies. Whether you're just starting out or you're a seasoned pro, we have content that will help you grow and succeed.
          </p>
        </div>
        <div className={Styles.section}>
          <h2 className={Styles.title}>Meet the Team</h2>
          <p className={Styles.text}>
            Our team consists of experienced developers, industry experts, and passionate tech enthusiasts. Each member brings a unique set of skills and knowledge to the table, ensuring that we deliver diverse and high-quality content. Get to know us better and connect with us to be part of our vibrant community!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
