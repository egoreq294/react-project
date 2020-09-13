import React from "react";
import styles from "./header.module.css";
function NavBar(props) {
  return (
    <ul className={[styles.display_flex, styles.nav_bar].join(" ")}>
      {props.navButtons.map((item) => (
        <li
          className={[styles.nav_bar_li, props.classLi].join(" ")}
          key={item[0]}
        >
          <a className={styles.nav_bar_a} href={item[1]}>
            {item[0]}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default NavBar;
