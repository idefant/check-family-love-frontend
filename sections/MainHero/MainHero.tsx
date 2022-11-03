import { FC } from "react";
import Container from "../../components/Container";
import style from "./MainHero.module.scss";

const MainHero: FC = () => (
  <section className={style.section}>
    <Container>
      <div className={style.title}>
        Оценка продолжительности совместной жизни с вашим партнером
      </div>
      <div className={style.subtitle}>
        Автоматическое определение нейроной сетью типа личности, характера Вас и
        вашего партнера, социометрических данных и оценка на основе статистики
        браков/разводов.
      </div>
    </Container>
  </section>
);

export default MainHero;
