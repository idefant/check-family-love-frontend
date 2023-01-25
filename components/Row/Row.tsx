import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

import style from './Row.module.scss';

const Row: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames(style.row, className)} {...props} />
);

export default Row;
