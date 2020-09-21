import React, { useContext } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { ThemeContext } from "./../../App";

function Logo(props) {
  const { style, changeStyle } = useContext(ThemeContext);
  return (
    <div className={styles.logo}>
      <button
        className={style === "light" ? styles.lightButton : styles.darkButton}
        type="button"
        onClick={changeStyle}
        id={style}
      >
        {style === "light" ? "Светлая тема" : "Темная тема"}
      </button>
      {style === "light" && (
        <p>
          <a href="#header">
            <img className={styles.logo_img} src={logo} alt="logo" />
          </a>
        </p>
      )}
    </div>
  );
}
export default Logo;
