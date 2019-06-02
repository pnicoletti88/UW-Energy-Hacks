import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";
import Button from "../../General/Button/Button";
import { HomePageType } from "../../../util/enums";
import SVindex from "../../../Assets/SVindex.PNG";

const About = ({ dataButtonClick }) => {
  const buttonClick = () => {
    dataButtonClick(HomePageType.SEARCH);
  };
  return (
    <div className={styles.mainContainer}>
      <h1>About Us</h1>
      <div className={styles.textArea}>
        <h3 className={styles.title}>What are we?</h3>
        <p>
          A platform which utilizes data from the
          {" "}
          <a href="https://www.canada.ca/en/environment-climate-change/services/climate-change/greenhouse-gas-emissions/facility-reporting.html">Facility Green House Gas Report</a>
          {" "}
as well as the
          {" "}
          <a href="https://www.cdp.net/en/info/about-us">CDP Climate Change grading system.</a>
          {" "}
The purpose of which is to identify companies who are making changes to mitigate their GHG emissions as well as 'name and shame' those who neglect this responsability.
        </p>
        <h3 className={styles.title}>What is Sustainable Value?</h3>
        <p>
        The Sustainable Value (SV) model is based on the theory of capital and opportunity costs. This directly correlates a companies net income with equivalent carbon emissions. Providing a clear and concise metric to identify progress in mitigating emissions as a company scales.

        </p>
        <img src={SVindex} alt="SVindex" className={styles.center} />
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
