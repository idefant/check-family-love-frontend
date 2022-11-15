import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './Checkbox.module.scss';

interface CheckboxProps {
  name?: string;
  children: ReactNode;
  formData?: UseFormRegisterReturn<string>;
  align?: 'center' | 'left';
}

const Checkbox: FC<CheckboxProps> = ({
  name, children, formData, align = 'left',
}) => {
  const alignClasses = {
    center: style.containerCenter,
    left: undefined,
  };

  return (
    <label className={classNames(style.container, alignClasses[align])}>
      <input type="checkbox" name={name} className={style.input} {...formData} />
      <div className={style.pseudoCheckbox} />
      {children}
    </label>
  );
};

export default Checkbox;
