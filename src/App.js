import React from "react";
import Header from "./components/header/Header";
import CardSection from "./components/cardSection/CardSection";
import VacanciesSection from "./components/vacancies/VacanciesSection";
import PartnersSection from "./components/partners/PartnersSection";
import ContactSection from "./components/contacts/ContactSection";

export const ThemeContext = React.createContext("dark");

function App() {
  return (
    <React.Fragment>
      <Header />

      <CardSection />

      <VacanciesSection />

      <PartnersSection />

      <ContactSection />
    </React.Fragment>
  );
}

export default App;
