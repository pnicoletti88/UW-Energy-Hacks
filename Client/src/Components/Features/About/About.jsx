import React from "react";
import styles from "./About.module.css";

const About = () => (
  <div className={styles.mainContainer}>
    <h3>What are we?</h3>
    <p>
        We aim to provide consumers with better insight about the
        companies which they use on daily basis. Using public governemnt
        data, stock market data, and a research based indexing formula, we
        are able to provide consumers with a high level of data than ever before
    </p>
  </div>
);

export default About;
