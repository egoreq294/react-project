import React from "react";
import Header from "./components/header/Header";
import CardSection from "./components/cardSection/CardSection";
import VacanciesSection from "./components/vacancies/VacanciesSection";
import PartnersSection from "./components/partners/PartnersSection";
import ContactSection from "./components/contacts/ContactSection";
import HhWidget from "./components/hhWidget/HhWidget";

function App() {
  return (
    <React.Fragment>
      <Header />

      <CardSection />

      <VacanciesSection />

      <PartnersSection />

      <ContactSection />

      <HhWidget />
    </React.Fragment>
  );
}

export default App;
