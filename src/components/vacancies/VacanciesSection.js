import React, { useEffect, useState } from "react";
import Title from "../Title";
import VacanciesContent from "./VacanciesContent";
import Navbar from "../Navbar";
import styles1 from "../header/header.module.css";
import styles from "./vacancies.module.css";
import classNames from "classnames";

function VacanciesSection() {
  const [vacancies, setVacancies] = useState({});
  const [index, setIndex] = useState("23780683");
  useEffect(() => {
    function getVacancies() {
      fetch("https://api.hh.ru/vacancies?employer_id=1980984")
        .then((response) => response.json())
        .then((response) => setVacancies(response));
    }
    getVacancies();
  }, []);

  function changeIndex(e) {
    for (let key in vacancies.items) {
      if (vacancies.items[key].name === e.target.innerHTML) {
        setIndex(vacancies.items[key].id);
      }
    }
  }

  if (Object.keys(vacancies).length !== 0) {
    let navButtonsArray = [];
    for (let key in vacancies.items) {
      navButtonsArray.push([
        vacancies.items[key].name,
        "#" + vacancies.items[key].id,
      ]);
    }
    return (
      <section id="vacancies">
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
              changeIndex={changeIndex}
              navButtons={navButtonsArray}
            />
          </div>
          <div className={styles.VacanciesContent}>
            <VacanciesContent index={index} vacanciesContent={vacancies} />
          </div>
        </div>
      </section>
    );
  } else return null;
}

export default VacanciesSection;
