import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

export default class Chart extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.Chart}>
          <Line
            data={{
              labels: Object.keys(data),
              datasets: [
                {
                  label: "score",
                  data: Object.values(data),
                  backgroundColor: "rgba(54, 170, 54, 0.6)",
                  borderColor: "rgba(54, 170, 54, 0.6)",
                },
              ],

            }}
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
              title: {
                display: true,
                text: "Equivalent Carbon Emissions",
                fontSize: 20,
              },
              scales: {
                yAxes: [{
                  scaleLabel: {
                    labelString: "Thousands of Tons Emissions",
                    display: true,
                  },
                }],
                xAxes: [{
                  scaleLabel: {
                    labelString: "Year",
                    display: true,
                  },
                }],
              },
            }}
          />
        </div>
      </div>
    );
  }
}
