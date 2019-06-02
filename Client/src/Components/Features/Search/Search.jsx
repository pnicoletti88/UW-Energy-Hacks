import React, { Component } from "react";
import styles from "./Search.module.css";
import InputWithSuggestions from "../../General/InputWithSuggestions/InputWithSuggestions";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  handleSearchChange = (value) => {

  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <h3>Search for Stock:</h3>
        <InputWithSuggestions />
      </div>
    );
  }
}

export default Search;
