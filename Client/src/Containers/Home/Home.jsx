import React, { Component } from "react";
import axios from "axios";
import About from "../../Components/Features/About/About";
import EarthImage from "../../Components/Features/EarthImage/EarthImage";
import styles from "./Home.module.css";
import Header from "../../Components/General/Header/Header";
import { HomePageType } from "../../util/enums";
import Search from "../../Components/Features/Search/Search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: HomePageType.ABOUT,
      data: undefined,
    };
  }

  async componentDidMount() {
    const data = await axios.get("http://localhost:5000/getListName/");
    this.setState({ data: data.data });
  }

  changePageType = (newDispType) => {
    this.setState({
      displayType: newDispType,
    });
  }

  render() {
    const { displayType, data } = this.state;
    const leftSide = displayType === HomePageType.ABOUT
      ? <About dataButtonClick={this.changePageType} />
      : <Search data={data} />;
    return (
      <div>
        <Header />
        <div className={styles.mainContainer}>
          {leftSide}
          <EarthImage />
        </div>
      </div>
    );
  }
}

export default Home;
