import React, { useContext } from "react";
import styles from "./card.module.css";
import { ThemeContext } from "./../../App";
import classnames from "classnames";

function Card(props) {
  const { style } = useContext(ThemeContext);
  return (
    <div
      className={classnames(style === "dark" && styles.darkCard, styles.card)}
    >
      <img
        className={styles.cardImg}
        src={
          typeof props.cardImg == "object"
            ? props.cardImg[Object.keys(props.cardImg)]
            : props.cardImg
        }
        alt={props.cardTitle}
      />
      <h2
        className={classnames(
          style === "dark" && styles.darkText,
          styles.cardText
        )}
      >
        {props.cardTitle}
      </h2>
    </div>
  );
}

export default Card;
