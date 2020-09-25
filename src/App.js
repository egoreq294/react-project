import React, { useState, useEffect } from "react";
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
  function changeStyle() {
    setStyle((style) => (style === "light" ? "dark" : "light"));
  }
  function changeStyleByTime(sunrise) {
    if (Object.keys(sunrise).length) {
      if (sunrise.results !== undefined && sunrise.results !== "") {
        let date = new Date();
        let sunsetTime = new Date(
          date.getFullYear() +
            ", " +
            Number(date.getMonth() + 1) +
            ", " +
            date.getDate() +
            ", " +
            sunrise.results.sunset +
            " UTC"
        );
        let sunriseTime = new Date(
          date.getFullYear() +
            ", " +
            Number(date.getMonth() + 1) +
            ", " +
            date.getDate() +
            ", " +
            sunrise.results.sunrise +
            " UTC"
        );
        if (sunriseTime < date && sunsetTime > date) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return true;
    }
  }
  const [style, setStyle] = useState("light");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`
        )
          .then((response) => response.json())
          .then((responseObject) => {
            if (changeStyleByTime(responseObject)) {
              setStyle("light");
            } else {
              setStyle("dark");
            }
          });
      },
      () => {
        console.log("err");
        return null;
      }
    );
  }, []); // eslint-disable-next-line

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
