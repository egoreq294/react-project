import React, { useContext } from "react";
import styles from "./header.module.css";
import Logo from "./Logo";
import Navbar from "./Navbar";
import classNames from "classnames";
import { ThemeContext } from "./../../App";

function Header(props) {
  const { style } = useContext(ThemeContext);
  return (
    <header id="header">
      <div
        className={classNames(
          style === "dark" && styles.dark,
          styles.content,
          styles.display_flex
        )}
      >
        <Logo />
        <Navbar
          classesForUl={classNames(
            style === "dark" && styles.darkUl,
            styles.display_flex,
            styles.nav_bar
          )}
          classesForLi={classNames(
            style === "dark" && styles.darkLi,
            styles.nav_bar_li
          )}
          classesForA={classNames(
            style === "light" ? styles.light_a : styles.dark_a,
            styles.nav_bar_a
          )}
          navButtons={[
            ["Информация", "#cards"],
            ["Вакансии", "#vacancies"],
            ["Партнеры", "#partners"],
            ["Контакты", "#contacts"],
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
