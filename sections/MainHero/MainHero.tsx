import Image from 'next/image';
import { FC } from 'react';

import Container from '../../components/Container';
import femaleImg from '../../public/img/female.png';
import maleImg from '../../public/img/male.png';

import style from './MainHero.module.scss';

const MainHero: FC = () => (
  <section className={style.section}>
    <Container>
      <div className={style.heroInner}>
        <h1 className={style.title}>
          Оценка продолжительности совместной жизни с вашим партнером
        </h1>
        <h2 className={style.subtitle}>
          Автоматическое определение нейронной сетью типа личности, характера Вас и
          вашего партнера, социометрических данных и оценка на основе статистики
          браков/разводов.
        </h2>

        <Image src={femaleImg} alt="Female icon" className={style.femaleIcon} />
        <Image src={maleImg} alt="Male icon" className={style.maleIcon} />
      </div>
    </Container>
  </section>
);

export default MainHero;
