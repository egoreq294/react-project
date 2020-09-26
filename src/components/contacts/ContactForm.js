import React, { useContext } from "react";
import styles from "./contact.module.css";
import classnames from "classnames";
import { ThemeContext } from "./../../App";
import classNames from "classnames";
import emailjs from "emailjs-com";

function ContactForm(props) {
  const { style } = useContext(ThemeContext);

  /*function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }*/

  function sendEmail(e) {
    e.preventDefault();
    if (
      document.querySelector("#form_email").value &&
      document.querySelector("#form_name").value &&
      document.querySelector("#form_description").value
    ) {
      console.log("nice");
      emailjs
        .sendForm(
          "service_8p3cfee",
          "template_9ew89mg",
          e.target,
          "user_CRjrs127tl9POtQlO7HOm"
        )
        .then(
          (result) => {
            console.log(result.text);
            document.querySelector("#form_name").value = "";
            document.querySelector("#form_email").value = "";
            document.querySelector("#form_description").value = "";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <React.Fragment>
      <form
        className={classNames(style === "dark" && styles.darkForm, styles.form)}
        onSubmit={sendEmail}
      >
        <div>
          <input
            type="text"
            name="user_name"
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
            name="user_email"
            className={styles.input_form}
            aria-describedby="emailHelp"
            placeholder="Email"
            required=""
          ></input>
        </div>
        <div>
          <textarea
            id="form_description"
            name="message"
            className={classnames(
              styles.input_form,
              styles.input_form_textarea
            )}
            cols="30"
            rows="10"
            placeholder="Describe your questions in detail..."
            required=""
          ></textarea>
        </div>

        <input
          type="submit"
          value="Send"
          className={classNames(
            style === "light" ? styles.lightBtn : styles.darkBtn,
            styles.btn
          )}
        />
      </form>
    </React.Fragment>
  );
}

export default ContactForm;
