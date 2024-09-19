import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import "../../App.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source }
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.descriptions}>
        {description.map((point, id) => (
          <li key={id} className={styles.descriptionItem}>
            {point}
          </li>
        ))}
      </ul>

      <div className={styles.keywords}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.keyword}>{skill}</div>
        ))}
      </div>

      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source Link
        </a>
      </div>
    </div>
  );
};
