import React from "react";
import CardField from "./CardField";
import Title from "../Title";
import styles from "./card.module.css";

import clock from "../../assets/clock.jpg";
import cookies from "../../assets/cookies.jpg";
import friends from "../../assets/friends.jpg";
import money from "../../assets/money.jpg";
import sport from "../../assets/sport.jpg";

const cardFieldInfos = [
  {
    cardImg: { money },
    cardTitle: "Высокая заработная плата",
  },
  {
    cardImg: { friends },
    cardTitle: "Молодой дружный коллектив",
  },
  {
    cardImg: { sport },
    cardTitle: "Корпоративный английский, занятия спортом",
  },
  {
    cardImg: { cookies },
    cardTitle: "В свободном доступе чай, кофе, вкусняшки",
  },
  {
    cardImg: { clock },
    cardTitle: "Удобный график",
  },
];

function CardSection() {
  return (
    <section id="cards">
      <div className={styles.content}>
        <Title text="Команда Dexsys IT сегодня" />
        <CardField cardObject={cardFieldInfos} />
      </div>
    </section>
  );
}

export default CardSection;
