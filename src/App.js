import React from "react";
import Header from "./components/header/Header";
import CardSection from "./components/cardSection/CardSection";
import VacanciesSection from "./components/vacancies/VacanciesSection";

function App() {
  return (
    <React.Fragment>
      <Header />

      <CardSection />

      <VacanciesSection />
    </React.Fragment>
  );
}

export default App;
