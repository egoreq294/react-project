import React from "react";
import styles from "./header.module.css";
import Logo from "./Logo";
import Navbar from "../Navbar";
import classNames from "classnames";

function Header() {
  return (
    <header id="header">
      <div className={classNames(styles.content, styles.display_flex)}>
        <Logo />
        <Navbar
          classesForUl={classNames(styles.display_flex, styles.nav_bar)}
          classesForLi={classNames(styles.nav_bar_li)}
          classesForA={classNames(styles.nav_bar_a)}
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
