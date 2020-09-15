import React from "react";

function NavBar(props) {
  return (
    <ul className={props.classesForUl}>
      {props.navButtons.map((item) => (
        <li className={props.classesForLi} key={item[0]}>
          <a
            onClick={props.changeIndex}
            className={props.classesForA}
            href={item[1]}
          >
            {item[0]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
