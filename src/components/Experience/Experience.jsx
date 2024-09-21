import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import "../../App.module.css";


export const Experience = () => {
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
          <div className={styles.aboutItemText}>
            <h3>AI-Empowered Cybersecurity REU</h3>
            <p>NSF REU Fellow, June 2024 – Augest 2024</p>
            <a href="https://github.com/smitike/pytorch-GAT" target="_blank" rel="noopener noreferrer">
              GitHub Link</a> <br></br>
              <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:99659472-c188-346f-aec7-3113d510707e" target="_blank" rel="noopener noreferrer">
               Research Paper</a>
            <ul>
              <li>Conducted research to identify critical vulnerabilities in current cybersecurity frameworks by analyzing gaps in current research.</li>
              <li>Performed feature engineering and hyperparameter tuning on two intrusion detection datasets, resulting in 15% ACC increase.</li>
              <li>Enhanced GAT model by integrating Quantum Computing that increased its performance accuracy by 4% for node classification.</li>
              <li>•	Co-authored a research paper with a collaborator, utilizing agile methodologies to manage the project efficiently.</li>
            </ul>
          </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("history/ucsc.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
            <div className={styles.aboutItemText}>
              <h3>Event-Based Camera Gesture Classification</h3>
              <p>Independent Research Project, April 2024 - June 2024 </p>
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
            <img src={getImageUrl("history/ucsc.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
            <div className={styles.aboutItemText}>
            <h3>AI Explainability and Accountability Research Lab</h3>
            <p>Research Lab Auditor, April 2024 - Present </p>
            <ul>
              <li>Utilized Bash scripts and Linux tools extensively to manage tasks. Engaged with emerging technology trends in XAI.</li>
              <li>Applied Reinforcement Learning algorithms to assess outcomes within simulated environments.</li>
            </ul>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("history/IvyReady.png")} alt="Server icon" style={{ width: "60px", height: "60px" }}/>
            <div className={styles.aboutItemText}>
            <h3>Ivy Ready</h3>
            <p>Financial Data Analyst, September 2023 - April 2024 </p>
            <ul>
              <li>Conducted financial analysis, reconciled receipts, and maintained accurate payroll records using Microsoft Excel.</li>
              <li>50% contribution effort into reducing discrepancies and ensuring precise alignment with accounting records.</li>
              <li>Collaborated on debugging efforts for SQL automated data reconciliation process, reducing reconciliation time by 30%.</li>
            </ul>
            </div>
          </li>


        </ul>
      </div>
      <div className={styles.topBlur} />
    </section>
  );
};