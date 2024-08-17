import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/laptop.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("history/umkc.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
          <div className={styles.experienceItem}>
            <h3>AI-Empowered Cybersecurity REU</h3>
            <p className={styles.position}>NSF REU Fellow June 2024 – Augest 2024</p><a href="https://github.com/smitike/pytorch-GAT" target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a><ul>
              <li>Conducted research to identify critical vulnerabilities in current cybersecurity frameworks by analyzing gaps in current research.</li>
              <li>Performed feature engineering and hyperparameter tuning on two intrusion detection datasets, resulting in 15% ACC increase.</li>
              <li>Enhanced GAT model by integrating Quantum Computing that increased its performance accuracy by 4% for node classification.</li>
              <li>Integrated Temporal graph into GAT model to capture temporal features and applied agile methodologies throughout the project.</li>
            </ul>
          </div>

      
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("history/ucsc.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
            <div className={styles.aboutItemText}>
            <h3>AI Explainability and Accountability Research Lab</h3>
            <p className={styles.position}>Research Lab Auditor April 2024 - Present </p>
            <ul>
              <li>Utilized Bash scripts and Linux tools extensively to manage tasks. Engaged with emerging technology trends in XAI.</li>
              <li>Applied Reinforcement Learning algorithms to assess outcomes within simulated environments.</li>
            </ul>
            </div>
          </li>


          <li className={styles.aboutItem}>
            <img src={getImageUrl("history/ucsc.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
            <div className={styles.aboutItemText}>
            <h3>Event-Based Camera Gesture Classification</h3>
            <p className={styles.position}>Independent Research Project April 2024 - June 2024 </p>
            <a href="https://github.com/smitike/dvs-gestures" target="_blank" rel="noopener noreferrer">
              GitHub Link </a>
            <ul>
              <li>Preprocessed DVSgesture dataset using Tonic and trained a Spiking Neural Network (SNN) with snntorch, achieving 92.19%
              accuracy in gesture classification.</li>
              <li>Led weekly meetings, collaborated on debugging and creating a tutorial on applying SNN to the DVSgesture dataset.</li>
            </ul>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("history/IvyReady.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
            <div className={styles.aboutItemText}>
            <h3>Ivy Ready</h3>
            <p className={styles.position}>Financial Data Analyst September 2023 - April 2024 </p>
            <ul>
              <li>Conducted financial analysis, reconciled receipts, and maintained accurate payroll records using Microsoft Excel.</li>
              <li>50% contribution effort into reducing discrepancies and ensuring precise alignment with accounting records.</li>
              <li>Collaborated on debugging efforts for SQL automated data reconciliation process, reducing reconciliation time by 30%.</li>
            </ul>
            </div>
          </li>


        </ul>
      </div>
    </section>
  );
};