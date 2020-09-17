import React from "react";
import styles from "./vacancies.module.css";

function VacanciesContent({ vacancy }) {
  return (
    <div className={styles.vacanciesInfos}>
      <h2>{vacancy.name}</h2>
      {vacancy.snippet.requirement && (
        <p>
          <span className={styles.content_text_span}>Требования: </span>{" "}
          {vacancy.snippet.requirement}
        </p>
      )}
      {vacancy.snippet.responsibility && (
        <p>
          <span className={styles.content_text_span}>Обязанности: </span>{" "}
          {vacancy.snippet.responsibility}
        </p>
      )}
      {vacancy.alternate_url && (
        <p>
          <a className={styles.middle} href={vacancy.alternate_url}>
            Ссылка на вакансию
          </a>
        </p>
      )}
    </div>
  );
}
export default VacanciesContent;
