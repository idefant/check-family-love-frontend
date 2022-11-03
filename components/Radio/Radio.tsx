import { FC, ReactNode } from 'react';

import style from './Radio.module.scss';

interface RadioProps {
  children: ReactNode;
  name: string;
}

const Radio: FC<RadioProps> = ({ children, name }) => (
  <label className={style.radio}>
    <input type="radio" name={name} />
    <div className={style.pseudoRadio}>
      <div className={style.pseudoRadioPoint} />
    </div>
    {children}
  </label>
);

export default Radio;
