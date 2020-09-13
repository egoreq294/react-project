import React from "react";
import NavBar from "./NavBar";
import styles from "./header.module.css";
import Logo from "./Logo";

function Header(props) {
  return (
    <div className={styles.display_flex}>
      <Logo />
      <NavBar
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
