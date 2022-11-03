import { FC } from 'react';

import Container from '../../components/Container';

import style from './MainHero.module.scss';

const MainHero: FC = () => (
  <section className={style.section}>
    <Container>
      <h1 className={style.title}>
        Оценка продолжительности совместной жизни с вашим партнером
      </h1>
      <h2 className={style.subtitle}>
        Автоматическое определение нейроной сетью типа личности, характера Вас и
        вашего партнера, социометрических данных и оценка на основе статистики
        браков/разводов.
      </h2>
    </Container>
  </section>
);

export default MainHero;
