import React, { Component } from "react";
import styles from "./Search.module.css";
import InputWithSuggestions from "../../General/InputWithSuggestions/InputWithSuggestions";

const Search = (props) => {
  const { data } = props;
  return (
    <div className={styles.mainContainer}>
      <h3>Search for Company:</h3>
      <InputWithSuggestions data={data} />
    </div>
  );
};


export default Search;
