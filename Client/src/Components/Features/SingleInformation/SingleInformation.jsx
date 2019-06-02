import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleInformation.module.css";

const SingleInformation = (props) => {
  const {
    name,
    grade,
    score,
    industry,
    numEmployees,
    ticker,
  } = props;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.grade}>
          {grade}
        </div>
      </div>
      <div className={styles.score}>
        {`Score: ${score}`}
      </div>
      <div>
        <div className={styles.detailsHeading}>
        Details
        </div>
        <div className={styles.details}>
          {`Industry: ${industry}`}
          {`Number of Employees: ${numEmployees}`}
          {`Ticker: ${ticker}`}
        </div>
      </div>
    </div>
  );
};

SingleInformation.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  numEmployees: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
};

export default SingleInformation;
