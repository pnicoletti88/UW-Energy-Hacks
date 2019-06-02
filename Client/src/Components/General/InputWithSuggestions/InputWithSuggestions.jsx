import React from "react";
import Autosuggest from "react-autosuggest";
import { Redirect } from "react-router-dom";
import styles from "./InputWithSuggestions.css";

const data = [
  {
    name: "phil",
  },
  {
    name: "garv",
  },
  {
    name: "matt",
  },
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : data.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
};

class InputWithSuggestions extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      redirect: undefined,
    };
  }

  getSuggestionValue = suggestion => suggestion.name;

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  onChange = (event, { newValue, method }) => {
    if (method === "click") {
      this.setState({ redirect: newValue });
    }
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      const { value } = this.state;
      this.setState({ redirect: value });
    }
  }

  render() {
    const { value, suggestions, redirect } = this.state;
    const inputProps = {
      placeholder: "Enter a company name",
      value,
      onChange: this.onChange,
      onSuggestionSelected: this.submitted,
      onKeyPress: this.onKeyPress,
    };

    if (redirect) {
      return (
        <Redirect to={`/${redirect}`} />
      );
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default InputWithSuggestions;
