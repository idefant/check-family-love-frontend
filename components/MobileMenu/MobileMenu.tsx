/* eslint-disable @next/next/no-html-link-for-pages */
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import { scrollTo } from '../../helpers/scroll';
import Portal from '../Portal';

import style from './MobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, close }) => {
  const router = useRouter();

  const scroll = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionName: string,
  ) => {
    e.preventDefault();

    close();
    if (router.pathname !== '/') {
      router.push(`/#${sectionName}`);
      return;
    }
    scrollTo(sectionName);
  };

  const hiddenScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const showScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: style.filterOpening,
          enterDone: style.filterOpened,
          exitActive: style.filterExiting,
        }}
        onEnter={hiddenScroll}
        onExited={showScroll}
      >
        <div className={style.filter} onClick={close} />
      </CSSTransition>
      <div className={classNames(style.menu, isOpen && style.opened)}>
        <a className={style.link} onClick={(e) => scroll(e, 'algo')} href="/#algo">
          Как это работает
        </a>
        <a className={style.link} onClick={(e) => scroll(e, 'start')} href="/#start">
          Начать работу
        </a>
      </div>
    </Portal>
  );
};

export default MobileMenu;
