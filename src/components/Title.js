import React, { useContext } from "react";
import styles from "./title.module.css";
import { ThemeContext } from "./../App";
import classNames from "classnames";

function Title(props) {
  const { style } = useContext(ThemeContext);
  return (
    <h1
      className={classNames(style === "dark" && styles.dark, styles.titleText)}
    >
      {props.text}
    </h1>
  );
}

export default Title;
