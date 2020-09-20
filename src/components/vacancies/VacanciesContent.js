import React from "react";
import styles from "./vacancies.module.css";

function VacanciesContent(props) {
  let vacancy = [];
  for (let key in props.vacanciesContent.items) {
    if (props.vacanciesContent.items[key].id === props.index) {
      vacancy.push(props.vacanciesContent.items[key]);
    }
  }
  console.log(vacancy);
  return (
    <div className={styles.vacanciesInfos} id={props.index}>
      {vacancy[0].name !== null ? <h2>{vacancy[0].name}</h2> : null}

      {vacancy[0].snippet.requirement !== null ? (
        <p>
          <span className={styles.content_text_span}>Требования: </span>{" "}
          {vacancy[0].snippet.requirement}
        </p>
      ) : null}
      {vacancy[0].snippet.responsibility !== null ? (
        <p>
          <span className={styles.content_text_span}>Обязанности: </span>{" "}
          {vacancy[0].snippet.responsibility}
        </p>
      ) : null}
      {vacancy[0].alternate_url !== null ? (
        <p>
          <a className={styles.middle} href={vacancy[0].alternate_url}>
            Ссылка на вакансию
          </a>
        </p>
      ) : null}
    </div>
  );
}
export default VacanciesContent;
