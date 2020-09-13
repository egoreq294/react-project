import React from "react";
import styles from "./header.module.css";
import Logo from "./Logo";
import Navbar from "../Navbar";

function Header(props) {
  return (
    <div className={styles.display_flex}>
      <Logo />
      <Navbar
        classesForUl={[styles.display_flex, styles.nav_bar]}
        classesForLi={[styles.nav_bar_li]}
        classesForA={[styles.nav_bar_a]}
        navButtons={[
          ["Информация", "#cards"],
          ["Вакансии", "#vacancies"],
          ["Партнеры", "#partners"],
          ["Контакты", "#contacts"],
        ]}
      />
    </div>
  );
}

export default Header;
