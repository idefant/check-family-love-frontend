import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'blue' | 'pink';
  outline?: boolean;
}

const Button: FC<ButtonProps> = ({ theme = 'blue', outline = false, className, ...props }) => (
  <button
    className={classNames(
      style.button,
      style[theme],
      outline ? style.outline : style.fill,
      className,
    )}
    type="button"
    {...props}
  />
);

export default Button;
