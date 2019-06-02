import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["2017", "2016", "2015", "2014"],
        datasets: [
          {
            label: "score",
            data: [
              100,
              120,
              130,
              115,
            ],
            backgroundcolor: "rgba(255, 99, 132, 0.6",
          },

        ],
      },

    };
  }

  render() {
    const { chartData } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.Chart}>
          <Line
            data={chartData}
            width={100}
            height={50}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              line: {
                tension: 0.3,
              },
              animation: {
                easing: "easeInCirc",
                duration: 1000,
              },
              layout: {
                padding: {
                  top: 5,
                  left: 15,
                  right: 15,
                  bottom: 15,
                },
              },

            }}
          />
        </div>
      </div>
    );
  }
}
