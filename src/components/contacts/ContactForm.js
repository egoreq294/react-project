import React, { useState, useContext } from "react";
import styles from "./contact.module.css";
import classnames from "classnames";
import { ThemeContext } from "./../../App";
import classNames from "classnames";
import emailjs from "emailjs-com";

import { Modal, Button } from "react-bootstrap";

function ContactForm(props) {
  const DarkBackground = {
    backgroundColor: "#383b40",
  };
  const DarkText = {
    color: "#fff",
    opacity: "0.65",
  };
  const DarkBtn = {
    background: "transparent",
    border: "2px solid white",
    color: "white",
    opacity: "0.65",
  };

  const { style } = useContext(ThemeContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showValidModal, setShowValidModal] = useState(false);
  const handleShowSuccessModal = () => setShowSuccessModal(true);
  const handleShowErrorModal = () => setShowErrorModal(true);
  const handleShowValidModal = () => setShowValidModal(true);
  const handleClose = () => {
    setShowErrorModal(false);
    setShowSuccessModal(false);
    setShowValidModal(false);
  };
  function sendEmail(e) {
    e.preventDefault();
    if (
      document.querySelector("#form_email").value &&
      document.querySelector("#form_name").value
    ) {
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
            document.querySelector("#form_link").value = "";
            document.querySelector("#form_description").value = "";
            handleShowSuccessModal();
          },
          (error) => {
            console.log(error.text);
            handleShowErrorModal();
          }
        );
    } else {
      handleShowValidModal();
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
            placeholder="Name*"
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
            placeholder="E-mail*"
            required=""
          ></input>
        </div>
        <div>
          <input
            type="text"
            id="form_link"
            name="user_link"
            className={styles.input_form}
            placeholder="Your CV link"
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
            placeholder="Write your questions"
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
      {/* Не успел сделать модалку по номральному? по хорошему добавить одну и менять содержимое*/}
      <Modal show={showSuccessModal} onHide={handleClose}>
        <Modal.Header style={style === "dark" ? DarkBackground : undefined}>
          <Modal.Title style={style === "dark" ? DarkText : undefined}>
            Thank you
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style === "dark" ? DarkBackground : undefined}>
          <span style={style === "dark" ? DarkText : undefined}>
            Your email has been sent
          </span>
        </Modal.Body>
        <Modal.Footer style={style === "dark" ? DarkBackground : undefined}>
          <Button
            style={style === "dark" ? DarkBtn : undefined}
            variant="primary"
            onClick={handleClose}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={handleClose}>
        <Modal.Header style={style === "dark" ? DarkBackground : undefined}>
          <Modal.Title style={style === "dark" ? DarkText : undefined}>
            Oops
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style === "dark" ? DarkBackground : undefined}>
          <span style={style === "dark" ? DarkText : undefined}>
            Sorry, there was an error, your email was not sent
          </span>
        </Modal.Body>
        <Modal.Footer style={style === "dark" ? DarkBackground : undefined}>
          <Button
            style={style === "dark" ? DarkBtn : undefined}
            variant="primary"
            onClick={handleClose}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showValidModal} onHide={handleClose}>
        <Modal.Header style={style === "dark" ? DarkBackground : undefined}>
          <Modal.Title style={style === "dark" ? DarkText : undefined}>
            Oops
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style === "dark" ? DarkBackground : undefined}>
          <span style={style === "dark" ? DarkText : undefined}>
            Please fill the required fields
          </span>
        </Modal.Body>
        <Modal.Footer style={style === "dark" ? DarkBackground : undefined}>
          <Button
            style={style === "dark" ? DarkBtn : undefined}
            variant="primary"
            onClick={handleClose}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ContactForm;
