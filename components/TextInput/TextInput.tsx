import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { genId } from '../../helpers/random';

import style from './TextInput.module.scss';

interface TextInputProps {
  id?: string;
  label?: ReactNode;
  formData?: UseFormRegisterReturn<string>;
  withError?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  id = genId(),
  label,
  formData,
  withError,
  placeholder,
  disabled,
}) => (
  <div className={style.container}>
    <label htmlFor={id} className={style.label}>
      {label}
    </label>
    <input
      type="text"
      id={id}
      className={classNames(style.input, withError && style.inputWithError)}
      placeholder={placeholder}
      disabled={disabled}
      {...formData}
    />
  </div>
);

export default TextInput;
