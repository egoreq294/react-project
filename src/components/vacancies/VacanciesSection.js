import React, { useEffect, useState, useContext } from "react";
import Title from "../Title";
import VacanciesContent from "./VacanciesContent";
import buttonStyles from "../buttonGroup.module.css";
import styles from "./vacancies.module.css";
import classNames from "classnames";
import ButtonGroup from "./../ButtonGroup";
import { ThemeContext } from "./../../App";

const DEXSYS_EMPLOYER = "1980984";

function VacanciesSection() {
  const { style } = useContext(ThemeContext);
  const [vacancies, setVacancies] = useState();
  const [selectedVacancy, setSelectedVacancy] = useState();

  useEffect(() => {
    fetch(`https://api.hh.ru/vacancies?employer_id=${DEXSYS_EMPLOYER}`)
      .then((response) => response.json())
      .then((responseObject) => {
        setVacancies(responseObject);
        setSelectedVacancy(responseObject?.items[0]);
      });
  }, []);

  function handleSelect(element) {
    const vacancyName = element.target.innerHTML;
    setSelectedVacancy(vacancies.items.find((v) => v.name === vacancyName));
  }

  if (!vacancies || !selectedVacancy) {
    return null;
  }

  const navButtonsArray = vacancies.items.map((item) => item.name);

  return (
    <section id="vacancies">
      <div className={styles.content}>
        <Title text="Вакансии" />
        <div className={styles.vacancies}>
          <div className={styles.VacanciesNavbar}>
            <ButtonGroup
              classesForUl={classNames(
                buttonStyles.buttonUl,
                styles.vacanciesButtonUl
              )}
              classesForLi={classNames(
                buttonStyles.buttonLi,
                styles.vacanciesNavbarElement
              )}
              classesForButton={classNames(
                style === "light"
                  ? buttonStyles.lightButton
                  : buttonStyles.darkButton,
                buttonStyles.button
              )}
              changeIndex={handleSelect}
              navButtons={navButtonsArray}
            />
          </div>
          <div className={styles.VacanciesContent}>
            <VacanciesContent vacancy={selectedVacancy} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VacanciesSection;
