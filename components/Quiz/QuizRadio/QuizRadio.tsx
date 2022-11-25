import { FC, ReactNode, useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { genId } from '../../../helpers/random';

import style from './QuizRadio.module.scss';

interface QuizRadioProps {
  value?: string;
  text: ReactNode;
  formData?: UseFormRegisterReturn<string>;
}

const QuizRadio: FC<QuizRadioProps> = ({ value, text, formData }) => {
  const idRef = useRef(genId());

  return (
    <div className={style.wrapper}>
      <input type="radio" id={idRef.current} {...formData} value={value} className={style.input} />
      <label className={style.label} htmlFor={idRef.current}>{text}</label>
    </div>
  );
};

export default QuizRadio;
