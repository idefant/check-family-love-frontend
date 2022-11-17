import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './Checkbox.module.scss';

interface CheckboxProps {
  name?: string;
  children: ReactNode;
  formData?: UseFormRegisterReturn<string>;
}

const Checkbox: FC<CheckboxProps> = ({ name, children, formData }) => (
  <label className={style.container}>
    <input type="checkbox" name={name} className={style.input} {...formData} />
    <div className={style.pseudoCheckbox} />
    <div className={style.text}>{children}</div>
  </label>
);

export default Checkbox;
