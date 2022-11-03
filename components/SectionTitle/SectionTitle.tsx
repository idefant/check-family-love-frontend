import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

import style from './SectionTitle.module.scss';

const SectionTitle: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={classNames(style.title, className)} {...props} />;

export default SectionTitle;
