import { FC } from 'react';

import style from './Spinner.module.scss';

const Spinner: FC = () => (
  <div className={style.spinner}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
