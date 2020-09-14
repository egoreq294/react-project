import React from "react";
import Title from "../Title";
import VacanciesContent from "./VacanciesContent";
import Navbar from "../Navbar";
import styles1 from "../header/header.module.css";
import styles from "./vacancies.module.css";

const vacanciesContent = [
  {
    vacancy: "Android-разработчик",
    description: "Чем предстоит заниматься: ",
    list: [
      "Разрабатывать продукт, у которого более 2-х миллионов пользователей",
      "Взаимодействие с другими командами и подразделениями",
      "Работа в выделенных продуктовых командах",
    ],
    id: "android",
    index: 0,
  },
  {
    vacancy: "Java developer",
    description:
      "Сейчас в связи с расширением мы ищем в нашу команду Java-разработчика! Задачи: ",
    list: [
      "Разработка модулей сервиса в команде",
      "Создания новых ит-решений непосредственно для клиентов физических и юридических лиц",
      "Развития с ведущими экспертами, наличие программы обучения",
    ],
    id: "java",
    index: 1,
  },
  {
    vacancy: "Frontend-разработчик (React)",
    description:
      "Сейчас в связи с расширением нам нужен Frontend-разработчик. У нас чётко выстроенные IT-процессы, команда профессионалов и мы Вас ждём! Что нужно будет делать: ",
    list: [
      "Участвовать в проектах реализации новых решений по новым продуктам и услугам, для клиентов физических и юридических лиц",
      "Разрабатывать пользовательские приложения, формирование качественного, чистого кода",
      "Осуществлять взаимодействие со всеми заинтересованными сторонами на предмет наилучшей реализации доработки, исправления дефектов",
    ],
    id: "react",
    index: 2,
  },
];

function VacanciesSection() {
  const [index, setIndex] = React.useState(0);
  function changeIndex(e) {
    vacanciesContent.find((item) => {
      if (item.vacancy === e.target.innerHTML) {
        setIndex(item.index);
      }
      return false;
    });
  }

  return (
    <section id="vacancies">
      <Title text="Вакансии" />
      <div className={styles.vacancies}>
        <div className={styles.VacanciesNavbar}>
          <Navbar
            classesForUl={[styles.vacanciesNavbarUl]}
            classesForLi={[styles1.nav_bar_li, styles.vacanciesNavbarElement]}
            classesForA={[styles1.nav_bar_a]}
            changeIndex={changeIndex}
            navButtons={[
              ["Android-разработчик", "#android"],
              ["Java developer", "#java"],
              ["Frontend-разработчик (React)", "#react"],
            ]}
          />
        </div>
        <div className={styles.VacanciesContent}>
          <VacanciesContent index={index} vacanciesContent={vacanciesContent} />
        </div>
      </div>
    </section>
  );
}

export default VacanciesSection;
