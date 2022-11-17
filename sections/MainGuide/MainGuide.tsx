import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import Container from '../../components/Container';
import uploadImg from '../../public/img/guide/1.png';
import answerImg from '../../public/img/guide/2.png';
import paymentImg from '../../public/img/guide/3.png';
import resultImg from '../../public/img/guide/4.png';

import style from './MainGuide.module.scss';

const MainGuide: FC = () => (
  <section className={style.section}>
    <Container>
      <div className={style.grid}>
        <div className={style.item}>
          <Image src={uploadImg} alt="" />
          <div className={classNames(style.itemText, style.itemTextPink)}>
            <span>Шаг 1. </span>
            Загрузите по 3 фото в фас парня и девушки
          </div>
        </div>

        <div className={style.item}>
          <Image src={answerImg} alt="" />
          <div className={classNames(style.itemText, style.itemTextBlue)}>
            <span>Шаг 2. </span>
            Ответьте на несколько вопросов
          </div>
        </div>

        <div className={style.item}>
          <Image src={resultImg} alt="" />
          <div className={classNames(style.itemText, style.itemTextBlue)}>
            <span>Шаг 4. </span>
            Получите результат
          </div>
        </div>

        <div className={style.item}>
          <Image src={paymentImg} alt="" />
          <div className={classNames(style.itemText, style.itemTextPink)}>
            <span>Шаг 3. </span>
            Заплатите 199 руб.
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default MainGuide;
