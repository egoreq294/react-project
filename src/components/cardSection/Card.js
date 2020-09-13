import React from "react";
import styles from "./card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={
          typeof props.cardImg == "object"
            ? props.cardImg[Object.keys(props.cardImg)]
            : props.cardImg
        }
        alt={props.cardTitle}
      />
      <h2 className={styles.cardText}>{props.cardTitle}</h2>
    </div>
  );
}

export default Card;
