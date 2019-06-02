import React, { Component } from "react";
import { getSingleData } from "../../util/util";
import SingleInformation from "../../Components/Features/SingleInformation/SingleInformation";
import Loading from "../../Components/General/LoadingPage/LoadingPage";
import styles from "./Single.module.css";

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
    const data = await getSingleData();
    console.log(data);
    this.setState({
      data,
      isLoading: false,
    });
    setTimeout(() => {
      this.setState({
        timePassed: true,
      });
    }, 1000);
  }

  render() {
    const { isLoading, data, timePassed } = this.state;

    if (isLoading || !timePassed) {
      return <Loading />;
    }

    return (
      <div className={styles.fadeIn}>
        <SingleInformation {...data} />
      </div>
    );
  }
}

export default Single;
