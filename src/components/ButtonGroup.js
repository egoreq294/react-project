import React from "react";

function ButtonGroup(props) {
  return (
    <ul className={props.classesForUl}>
      {props.navButtons.map((item) => (
        <li className={props.classesForLi} key={item[0]}>
          <button
            onClick={props.changeIndex}
            className={props.classesForButton}
            href={item[1]}
          >
            {item[0]}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ButtonGroup;
