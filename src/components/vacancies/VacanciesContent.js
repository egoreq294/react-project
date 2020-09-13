import React from "react";
import styles from "./vacancies.module.css";

function VacanciesContent(props) {
  return (
    <div
      className={styles.vacanciesInfos}
      id={props.vacanciesContent[props.index].id}
    >
      <h2>{props.vacanciesContent[props.index].vacancy}</h2>
      <p>{props.vacanciesContent[props.index].description}</p>
      {props.vacanciesContent[props.index].list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
export default VacanciesContent;
