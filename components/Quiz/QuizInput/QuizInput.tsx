import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './QuizInput.module.scss';

interface QuizInputProps {
  units?: ReactNode;
  withError?: boolean;
  formData?: UseFormRegisterReturn<string>;
  placeholder?: string;
  description?: ReactNode;
}

const QuizInput: FC<QuizInputProps> = ({
  units, withError, formData, placeholder, description,
}) => (
  <label className={classNames(style.label, withError && style.labelWithError)}>
    {description && <div className={style.description}>{description}</div>}
    <input type="text" className={style.input} {...formData} placeholder={placeholder} />
    {units && <div className={style.units}>{units}</div>}
  </label>
);

export default QuizInput;
