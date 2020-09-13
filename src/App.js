import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import CardSection from "./components/cardSection/CardSection";
import VacanciesSection from "./components/vacancies/VacanciesSection";

function App() {
  return (
    <div className={styles.wrapper}>
      <header id="header">
        <Header />
      </header>

      <section id="cards">
        <CardSection />
      </section>

      <section id="vacancies">
        <VacanciesSection />
      </section>
    </div>
  );
}

export default App;
