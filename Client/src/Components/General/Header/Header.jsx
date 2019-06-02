import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import earth from "../../../Assets/earth.png";
import gear from "../../../Assets/whiteGear2.png";

const Header = () => (
  <div className={styles.mainContainer}>
    <div className={styles.leftSide}>
      <img src={earth} alt="earth" className={styles.headerIcon} />
      <Link className={styles.link} to="/">
        <div className={styles.headerItemBold}>
          CETA
        </div>
      </Link>
      <Link className={styles.link} to="/">
        <div className={styles.headerItem}>
          Home
        </div>
      </Link>
      <Link className={styles.link} to="/">
        <div className={styles.headerItem}>
          Rankings
        </div>
      </Link>
    </div>
    <img src={gear} alt="gear" className={styles.gearIcon} />
  </div>
);

export default Header;
