import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:selammitike8@gmail.com">selammitike8@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/selam-mitike-585743294/">linkedin.com/selam-mitike</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/smitike?tab=repositories">github.com/smitike</a>
        </li>
      </ul>
    </footer>
  );
};