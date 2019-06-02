import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleInformation.module.css";

const SingleInformation = props => (
  <div className={styles.mainContainer}>
    <div className={styles.topContainer}>
        <div className={styles.name}>
          {props["Company Name"]}
        </div>
      </div>
    <div className={styles.score}>
        {`Score: ${props.Score}`}
      </div>
    <div>
        <div className={styles.detailsHeading}>
        Details:
        </div>
        <div className={styles.details}>
          <p>{`Industry: ${props.Industry}`}</p>
          <p>{`Number of Employees: ${props["Number of Employees"]}`}</p>
          <p>{`Ticker: ${props.Ticker}`}</p>
        </div>
      </div>
    <div className={styles.grade}>
        <div className={styles.gradeInner}>
          {` CDP Grade: ${props["CDP Climate Change Grade"]}`}
        </div>
      </div>
  </div>
);

SingleInformation.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  numEmployees: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
};

export default SingleInformation;
