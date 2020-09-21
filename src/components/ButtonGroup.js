import React, { useState, useContext } from "react";
import classNames from "classnames";
import styles from "./buttonGroup.module.css";
import { ThemeContext } from "./../App";

function ButtonGroup(props) {
  const { style } = useContext(ThemeContext);
  const [activeButton, setActiveButton] = useState(props.navButtons[0]);
  function doButtonActive(e) {
    setActiveButton(e.target.innerHTML);
  }
  return (
    <ul className={props.classesForUl}>
      {props.navButtons.map((item) => (
        <li className={props.classesForLi} key={item}>
          <button
            onClick={(e) => {
              doButtonActive(e);
              props.changeIndex(e);
            }}
            className={classNames(
              props.classesForButton,
              activeButton === item
                ? style === "light"
                  ? styles.activeLightButton
                  : styles.activeDarkButton
                : null
            )}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ButtonGroup;
