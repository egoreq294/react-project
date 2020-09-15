import React from "react";
import styles from "./partners.module.css";

function PartnersContent(props) {
  return (
    <div className={styles.content_div}>
      <img
        className={styles.partners_img}
        src={
          typeof props.partnersContent[props.index].img == "object"
            ? props.partnersContent[props.index].img[
                Object.keys(props.partnersContent[props.index].img)
              ]
            : props.partnersContent[props.index].img
        }
        alt={props.partnersContent[props.index].partner}
      />
      <p className={styles.partners_text}>
        {props.partnersContent[props.index].description}
      </p>
    </div>
  );
}
export default PartnersContent;
