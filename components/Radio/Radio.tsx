import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './Radio.module.scss';

interface RadioProps {
  children: ReactNode;
  name?: string;
  formData?: UseFormRegisterReturn<string>;
  value?: string | number;
}

const Radio: FC<RadioProps> = ({
  children, name, formData, value,
}) => (
  <label className={style.radio}>
    <input type="radio" value={value} name={name} {...formData} />
    <div className={style.pseudoRadio}>
      <div className={style.pseudoRadioPoint} />
    </div>
    {children}
  </label>
);

export default Radio;
