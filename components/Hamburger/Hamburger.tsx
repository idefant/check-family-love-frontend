import classNames from 'classnames';
import { FC } from 'react';

import style from './Hamburger.module.scss';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ isOpen, toggle }) => (
  <button
    type="button"
    onClick={toggle}
    className={classNames(style.button, isOpen && style.opened)}
  >
    <div className={style.icon} />
  </button>
);

export default Hamburger;
