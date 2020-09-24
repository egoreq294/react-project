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
  const [style, setStyle] = useState("dark");
  function changeStyle() {
    setStyle((style) => (style === "light" ? "dark" : "light"));
  }
  const [coords, setCoords] = useState({});
  const [sunrise, setSunrise] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        fetch(
          `https://api.sunrise-sunset.org/json?lat=${coords.latitude}&lng=${coords.longitude}`
        )
          .then((response) => response.json())
          .then((responseObject) => {
            setSunrise(responseObject);
          });

        if (Object.keys(coords).length) {
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
              setStyle("light");
              console.log("hello1");
            } else {
              setStyle("dark");
              console.log("hello3");
            }
          }
        } else {
          setStyle("light");
          console.log("hello2");
        }
      },
      () => {
        console.log("err");
        return null;
      }
    );
  }, [coords]);

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
