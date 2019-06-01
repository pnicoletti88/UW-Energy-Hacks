import React from "react";
import About from "../../Components/Features/About/About";
import EarthImage from "../../Components/Features/EarthImage/EarthImage";
import styles from "./Home.module.css";
import Header from "../../Components/General/Header/Header";

const Home = () => (
  <div>
    <Header />
    <div className={styles.mainContainer}>
      <About />
      <EarthImage />
    </div>
  </div>
);

export default Home;
