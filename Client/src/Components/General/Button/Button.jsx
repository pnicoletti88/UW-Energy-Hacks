import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => {
  const { buttonClick, text } = props;
  const onClick = () => {
    buttonClick();
  };
  return (
    <button className={styles.button} type="button" onClick={onClick}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  buttonClick: PropTypes.func,
};

Button.defaultProps = {
  text: "",
  buttonClick: () => {},
};

export default Button;
