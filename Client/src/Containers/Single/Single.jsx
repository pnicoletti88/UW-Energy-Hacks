import React, { Component } from "react";
import axios from "axios";
import { getSingleData } from "../../util/util";
import SingleInformation from "../../Components/Features/SingleInformation/SingleInformation";
import Loading from "../../Components/General/LoadingPage/LoadingPage";
import styles from "./Single.module.css";
import Chart from "../../Components/Features/Chart/Chart";
import Header from "../../Components/General/Header/Header";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      timePassed: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const chartData = await axios.get(`http://localhost:5000/getFinancialData/${match.params.name}`);
    const companyData = await axios.get(`http://localhost:5000/getCompanyData/${match.params.name}`);
    this.setState({
      chartData: chartData.data,
      companyData: companyData.data,
      isLoading: false,
    });
    setTimeout(() => {
      this.setState({
        timePassed: true,
      });
    }, 1000);
  }

  render() {
    const {
      isLoading,
      timePassed,
      chartData,
      companyData,
    } = this.state;

    if (isLoading || !timePassed) {
      return <Loading />;
    }

    return (
      <div className={styles.fadeIn}>
        <Header />
        <div className={styles.mainFlex}>
          <SingleInformation {...companyData} />
          <Chart data={chartData} />
        </div>
      </div>
    );
  }
}

export default Single;
