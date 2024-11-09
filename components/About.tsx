// components/AboutContent.jsx
import React from 'react';
import styles from '../css/AboutContent.module.css';

const AboutContent = () => {
  return (
    <section className={styles.aboutContent}>
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate web developer with a love for creating modern and user-friendly websites.
        I specialize in front-end development, particularly using React, Next.js, and Tailwind CSS, but I also
        have experience with back-end technologies like Node.js and Express. My goal is to build fast, responsive,
        and beautiful web applications that provide excellent user experiences.
      </p>

      <div className={styles.imageWrapper}>
        <img
          src="/images/profile.jpg" // Replace with your image path
          alt="Profile Picture"
        />
      </div>

      <p>
        I am always excited to learn new technologies and improve my skills. Outside of coding, I enjoy traveling, 
        photography, and exploring the latest design trends. My mission is to continuously challenge myself and
        create innovative solutions for my clients and users.
      </p>
    </section>
  );
};

export default AboutContent;