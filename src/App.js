import React, { useState } from "react";
import Header from "./components/header/Header";
import CardSection from "./components/cardSection/CardSection";
import VacanciesSection from "./components/vacancies/VacanciesSection";
import PartnersSection from "./components/partners/PartnersSection";
import ContactSection from "./components/contacts/ContactSection";
import styles from "./App.module.css";

export const ThemeContext = React.createContext({
  theme: "light",
  changeTheme: () => {},
});

function App() {
  const [style, setStyle] = useState("light");
  function changeStyle() {
    setStyle((style) => (style === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ style, changeStyle }}>
      <div
        className={
          style === "light" ? styles.lightBackground : styles.darkBackground
        }
      >
        <Header />

        <CardSection />

        <VacanciesSection />

        <PartnersSection />

        <ContactSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
