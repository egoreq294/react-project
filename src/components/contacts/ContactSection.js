import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";
import Title from "./../Title";
import { ThemeContext } from "./../../App";
import classNames from "classnames";

function ContactSection() {
  const { style } = useContext(ThemeContext);
  return (
    <section id="contacts">
      <div className={styles.content}>
        <Title text="Контакты" />
        <div className={styles.display_flex}>
          <ContactForm />
          <div className={styles.contacts_info}>
            <ul>
              <li>
                <a
                  className={classNames(
                    style === "dark" && styles.darkText,
                    styles.a
                  )}
                  href="tel:+73412561805"
                >
                  +7 (3412) 56-18-05
                </a>
              </li>
              <li>
                <a
                  className={classNames(
                    style === "dark" && styles.darkText,
                    styles.a
                  )}
                  href="mailto:amezenceva@dexsys.ru"
                >
                  amezenceva@dexsys.ru
                </a>
              </li>
              <li>
                <a
                  className={classNames(
                    style === "dark" && styles.darkText,
                    styles.a
                  )}
                  href="mailto:emenchikova@dexsys.ru"
                >
                  emenchikova@dexsys.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
