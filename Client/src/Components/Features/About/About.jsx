import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import Button from "../../General/Button/Button";
import { HomePageType } from "../../../util/enums";

const About = ({ dataButtonClick }) => {
  const buttonClick = () => {
    dataButtonClick(HomePageType.SEARCH);
  };
  return (
    <div className={styles.mainContainer}>
      <h1>Our Lovely Project</h1>
      <div className={styles.textArea}>
        <h3 className={styles.title}>What are we?</h3>
        <p>
          We aim to provide consumers with better insight about the
          companies which they use on daily basis. Using public governemnt
          data, stock market data, and a research based indexing formula, we
          are able to provide consumers with a high level of data than ever before
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button text="View Data" buttonClick={buttonClick} />
      </div>
    </div>
  );
};

About.propTypes = {
  dataButtonClick: PropTypes.func.isRequired,
};

export default About;
