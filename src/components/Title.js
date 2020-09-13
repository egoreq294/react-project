import React from "react";
import styles from "./title.module.css";

function Title(props) {
  return <h1 className={styles.titleText}>{props.text}</h1>;
}

export default Title;
