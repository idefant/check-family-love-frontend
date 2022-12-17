import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './QuizRadio.module.scss';

interface QuizRadioProps {
  value?: string;
  text: ReactNode;
  formData?: UseFormRegisterReturn<string>;
  className?: string;
}

const QuizRadio: FC<QuizRadioProps> = ({
  value, text, formData, className,
}) => (
  <div className={classNames(style.wrapper, className)}>
    <input type="radio" {...formData} value={value} className={style.input} />
    <label className={style.label}>{text}</label>
  </div>
);

export default QuizRadio;
