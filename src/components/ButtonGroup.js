import React, { useState } from "react";
import classNames from "classnames";
import styles from "./buttonGroup.module.css";

function ButtonGroup(props) {
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
              activeButton === item ? styles.activeButton : null
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
