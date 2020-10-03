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
  const lightTheme = "light";
  const darkTheme = "dark";
  const [style, setStyle] = useState(lightTheme);

  function changeStyle() {
    setStyle((style) => (style === lightTheme ? darkTheme : lightTheme));
  }

  function createDate(date, time) {
    const year = date.getFullYear();
    const month = Number(date.getMonth() + 1);
    const day = date.getDate();
    return new Date(`${year}, ${month}, ${day}, ${time}, UTC`);
  }

  function getStyleByTime(sunriseSunsetResponse) {
    if (sunriseSunsetResponse.results) {
      let date = new Date();
      let sunsetTime = createDate(date, sunriseSunsetResponse.results.sunset);
      let sunriseTime = createDate(date, sunriseSunsetResponse.results.sunrise);
      if (sunriseTime < date && sunsetTime > date) {
        return lightTheme;
      } else {
        return darkTheme;
      }
    } else {
      return lightTheme;
    }
  }
  /* eslint-disable */
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
            const style = getStyleByTime(responseObject);
            if (style) {
              setStyle(style);
            }
          })
          .catch((err) => console.log(err));
      },
      () => {
        console.log("err");
        return null;
      }
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ style, changeStyle }}>
      <div
        className={
          style === lightTheme ? styles.lightBackground : styles.darkBackground
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
