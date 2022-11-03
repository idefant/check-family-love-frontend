import { FC, ReactNode } from 'react';

import style from './QuizCard.module.scss';

interface QuizCardProps {
  number: number;
  question: string;
  children: ReactNode;
}

const QuizCard: FC<QuizCardProps> = ({ number, question, children }) => (
  <div className={style.card}>
    <div className={style.number}>
      Вопрос
      {' '}
      {number}
      /12
    </div>
    <div className={style.question}>{question}</div>
    <div className={style.control}>{children}</div>
  </div>
);

export default QuizCard;
