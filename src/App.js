import React from "react";
import Header from "./components/header/Header";
import CardSection from "./components/cardSection/CardSection";
import VacanciesSection from "./components/vacancies/VacanciesSection";
import PartnersSection from "./components/partners/PartnersSection";

function App() {
  return (
    <React.Fragment>
      <Header />

      <CardSection />

      <VacanciesSection />

      <PartnersSection />
    </React.Fragment>
  );
}

export default App;
