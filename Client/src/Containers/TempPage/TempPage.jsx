import React from "react";
import Loading from "react-fullscreen-loading";
import styles from "./TempPage.module.css";
import Header from "../../Components/General/Header/Header";
import Chart from "../../Components/Features/Chart/Chart";

const TempPage = () => (
  <div>
    <Header />
    <div>
      <Chart />
    </div>
  </div>
);


export default TempPage;
