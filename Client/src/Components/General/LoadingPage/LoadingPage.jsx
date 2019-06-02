import React from "react";
import Loading from "react-fullscreen-loading";
import styles from "./LoadingPage.module.css";

const LoadingPage = () => (
  <div className={styles.elementToFadeInAndOut}>
    <Loading loading background="#2ecc71" loaderColor="#3498db" />
  </div>
);

export default LoadingPage;
