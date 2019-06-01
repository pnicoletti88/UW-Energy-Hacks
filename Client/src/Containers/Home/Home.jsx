import React from "react";
import About from "../../Components/Features/About/About";
import EarthImage from "../../Components/Features/EarthImage/EarthImage";
import styles from "./Home.module.css";

const Home = () => (
  <div className={styles.mainContainer}>
    <About />
    <EarthImage />
  </div>
);

export default Home;
