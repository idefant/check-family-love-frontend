import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import smolQuestions from '../../../data/quiz/smol';
import QuizRadio from '../QuizRadio';

import style from './QuizSMOLBlock.module.scss';

interface QuizSMOLBlockProps {
  register: UseFormRegister<any>;
}

const QuizSMOLBlock: FC<QuizSMOLBlockProps> = ({ register }) => (
  <>
    {smolQuestions.map((question, i) => (
      <div className={style.item} key={i}>
        <QuizRadio
          className={style.radioYes}
          text="Да"
          value="true"
          formData={register(`smol.${i}`, { required: true })}
        />
        <QuizRadio
          className={style.radioNo}
          text="Нет"
          value="false"
          formData={register(`smol.${i}`, { required: true })}
        />
        <div className={style.question}>{question}</div>
      </div>
    ))}
  </>
);

export default QuizSMOLBlock;