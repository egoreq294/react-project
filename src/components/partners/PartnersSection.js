import React from "react";
import Navbar from "../Navbar";
import PartnersContent from "./PartnersContent";
import Title from "../Title";
import classNames from "classnames";
import style from "./partners.module.css";
import styleNavbar from "../header/header.module.css";

import homecredit from "../../assets/homecredit.png";
import turbozaim from "../../assets/turbozaim.jpg";
import dexbee from "../../assets/dexbee.jpg";

const partnersContent = [
  {
    partner: "Home credit",
    description:
      "Мы разрабатываем новые системы, модифицируем и поддерживаем существующие программные комплексы на разных языковых платформах. А также проводим системную аналитику, функциональное и нагрузочное тестирование. ",
    img: { homecredit },
    id: "homecredit",
    index: 0,
  },
  {
    partner: "Турбозайм",
    description:
      "Команда поддерживает Мобильную версию, оформление заявки для онлайн-сервисов микрофинансовой компании Турбозайм, и компании Быстроденьги. проводит системную аналитику, разработку, функциональное и нагрузочное тестирование.",
    img: { turbozaim },
    id: "turbo",
    index: 1,
  },
  {
    partner: "Наш проект DexBee",
    description:
      "DexBee – это система мониторинга тренировок в фитнес-центрах, которая в реальном времени позволяет управлять тренировками клиентов, получать данные о сердечном ритме и сжигаемых калориях.",
    img: { dexbee },
    id: "dexbee",
    index: 2,
  },
];

function PartnersSection() {
  const [index, setIndex] = React.useState(0);
  function changeIndex(e) {
    partnersContent.find((item) => {
      if (item.partner === e.target.innerHTML) {
        setIndex(item.index);
      }
      return false;
    });
  }

  return (
    <section id="partners">
      <Title text="Партнеры" />
      <Navbar
        classesForUl={classNames(style.display_flex, style.nav_bar_ul_partners)}
        classesForLi={classNames(
          styleNavbar.nav_bar_li,
          style.nav_bar_li_partners
        )}
        classesForA={classNames(styleNavbar.nav_bar_a)}
        navButtons={[
          ["Home credit", "#homecredit"],
          ["Турбозайм", "#turbo"],
          ["Наш проект DexBee", "#dexbee"],
        ]}
        changeIndex={changeIndex}
      />
      <PartnersContent index={index} partnersContent={partnersContent} />
    </section>
  );
}
export default PartnersSection;
