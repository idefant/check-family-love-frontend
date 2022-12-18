import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { genId } from '../../../helpers/random';

import style from './QuizRadio.module.scss';

interface QuizRadioProps {
  value?: string;
  text: ReactNode;
  formData?: UseFormRegisterReturn<string>;
  className?: string;
  id?: string;
}

const QuizRadio: FC<QuizRadioProps> = ({
  value, text, formData, className, id = genId(),
}) => (
  <div className={classNames(style.wrapper, className)}>
    <input type="radio" id={id} {...formData} value={value} className={style.input} />
    <label htmlFor={id} className={style.label}>{text}</label>
  </div>
);

export default QuizRadio;
