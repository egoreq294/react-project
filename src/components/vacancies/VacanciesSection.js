import React, { useEffect, useState } from "react";
import Title from "../Title";
import VacanciesContent from "./VacanciesContent";
import Navbar from "../Navbar";
import styles1 from "../header/header.module.css";
import styles from "./vacancies.module.css";
import classNames from "classnames";

const DEXSYS_EMPLOYER = "1980984";

function VacanciesSection() {
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

  const navButtonsArray = vacancies.items.map((item) => [
    item.name,
    `#${item.id}`,
  ]);

  return (
    <section id="vacancies">
      <div className={styles.content}>
        <Title text="Вакансии" />
        <div className={styles.vacancies}>
          <div className={styles.VacanciesNavbar}>
            <Navbar
              classesForUl={classNames(styles.vacanciesNavbarUl)}
              classesForLi={classNames(
                styles1.nav_bar_li,
                styles.vacanciesNavbarElement
              )}
              classesForA={classNames(styles1.nav_bar_a)}
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
