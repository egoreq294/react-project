import React, { useContext } from "react";
import styles from "./contact.module.css";
import classnames from "classnames";
import { ThemeContext } from "./../../App";
import classNames from "classnames";

function ContactForm(props) {
  const { style } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <form
        className={classNames(style === "dark" && styles.darkForm, styles.form)}
      >
        <div>
          <input
            type="text"
            name="Name"
            className={styles.input_form}
            id="form_name"
            placeholder="Имя"
            required=""
          ></input>
        </div>
        <div>
          <input
            type="email"
            id="form_email"
            className={styles.input_form}
            aria-describedby="emailHelp"
            placeholder="Email"
            required=""
          ></input>
        </div>
        <div>
          <textarea
            id="form-description"
            name="question"
            className={classnames(
              styles.input_form,
              styles.input_form_textarea
            )}
            cols="30"
            rows="10"
            placeholder="Describe your questions in detail..."
          ></textarea>
        </div>

        <button
          type="submit"
          className={classNames(
            style === "light" ? styles.lightBtn : styles.darkBtn,
            styles.btn
          )}
        >
          Отправить
        </button>
      </form>
    </React.Fragment>
  );
}

export default ContactForm;
