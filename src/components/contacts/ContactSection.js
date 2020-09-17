import React from "react";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";
import Title from "./../Title";

function ContactSection() {
  return (
    <section id="contacts">
      <Title text="Контакты" />
      <div className={styles.display_flex}>
        <ContactForm />
        <div className={styles.contacts_info}>
          <ul>
            <li>
              <a className={styles.a} href="tel:+73412561805">
                +7 (3412) 56-18-05
              </a>
            </li>
            <li>
              <a className={styles.a} href="mailto:amezenceva@dexsys.ru">
                amezenceva@dexsys.ru
              </a>
            </li>
            <li>
              <a className={styles.a} href="mailto:emenchikova@dexsys.ru">
                emenchikova@dexsys.ru
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
