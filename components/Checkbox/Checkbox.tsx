import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './Checkbox.module.scss';

interface CheckboxProps {
  name?: string;
  value?: string | number;
  children: ReactNode;
  formData?: UseFormRegisterReturn<string>;
}

const Checkbox: FC<CheckboxProps> = ({
  name, value, children, formData,
}) => (
  <label className={style.container}>
    <input type="checkbox" name={name} className={style.input} value={value} {...formData} />
    <div className={style.pseudoCheckbox} />
    <div className={style.text}>{children}</div>
  </label>
);

export default Checkbox;
