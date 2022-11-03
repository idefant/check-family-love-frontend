import { FC } from 'react';

import Button from '../../components/Button';
import Container from '../../components/Container';
import QuizCard from '../../components/QuizCard';
import SectionTitle from '../../components/SectionTitle';

import style from './MainQuiz.module.scss';

const MainQuiz: FC = () => (
  <section>
    <SectionTitle>Ответьте на 12 вопросов:</SectionTitle>
    <Container>
      <QuizCard number={1} question="Разница в росте (Рм-Рж)">
        <Button>Да</Button>
        <Button>Нет</Button>
      </QuizCard>

      <Button theme="pink" className={style.submitButton}>
        Запустить анализ фотографий
      </Button>
    </Container>
  </section>
);

export default MainQuiz;
