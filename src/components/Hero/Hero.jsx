import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import "../../App.module.css";
import skills from "../../data/skills.json"; // Import skills data

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <h3 className={styles.title}>Hi, I'm Selam</h3>
          <p className={styles.description}>
            Third year CS student at UCSC with interest in AI/ML and Software Engineering.
          </p>
          <div className={styles.links}>
            <a href="mailto:selammitike8@gmail.com">
              <img src={getImageUrl("contact/email.png")} alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/selam-mitike-585743294/">
              <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn" />
            </a>
            <a href="https://github.com/smitike?tab=repositories">
              <img src={getImageUrl("contact/github.png")} alt="Github" />
            </a>
          </div>
        </div>
        <img src={getImageUrl("hero/profile.jpeg")} alt="Selam's profile" className={styles.heroImg} />
      </div>

      {/* Add Skills Section Next to Hero */}
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                {/* <p>{skill.title}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
