import React, { Component } from "react";
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
    };
  }

  changePageType = (newDispType) => {
    this.setState({
      displayType: newDispType,
    });
  }

  render() {
    const { displayType } = this.state;
    const leftSide = displayType === HomePageType.ABOUT
      ? <About dataButtonClick={this.changePageType} />
      : <Search />;
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
