import React, { useContext } from "react";
import styles from "./vacancies.module.css";
import { ThemeContext } from "./../../App";
import classNames from "classnames";

function VacanciesContent({ vacancy }) {
  const { style } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        style === "dark" && styles.darkText,
        styles.vacanciesInfos
      )}
    >
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
          <a
            className={classNames(
              style === "dark" && styles.darkA,
              styles.middle
            )}
            href={vacancy.alternate_url}
          >
            Ссылка на вакансию
          </a>
        </p>
      )}
    </div>
  );
}
export default VacanciesContent;
