import React from "react";
import image from "../../../Assets/earth.png";
import styles from "./EarthImage.module.css";

const EarthImage = () => (
  <div className={styles.mainContainer}>
    <div className={styles.outerCircle}>
      <img src={image} alt="Can't find" />
    </div>
  </div>
);

export default EarthImage;
