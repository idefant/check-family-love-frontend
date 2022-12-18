import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import smolQuestions from '../../../data/quiz/smol';
import QuizRadio from '../QuizRadio';

import style from './QuizSMOLBlock.module.scss';

const QuizSMOLBlock: FC = () => {
  const form = useFormContext();
  if (!form) return null;
  const { register } = form;

  return (
    <>
      {smolQuestions.map((question, i) => (
        <div className={style.item} key={i}>
          <QuizRadio
            id={`smol.${i}.true`}
            className={style.radioYes}
            text="Да"
            value="true"
            formData={register(`smol.${i}`, { required: true })}
          />
          <QuizRadio
            id={`smol.${i}.false`}
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
};

export default QuizSMOLBlock;
