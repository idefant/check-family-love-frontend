import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

import style from './Container.module.scss';

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames(style.container, className)} {...props} />
);

export default Container;
