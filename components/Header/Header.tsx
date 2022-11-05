import { useRouter } from 'next/router';
import { FC } from 'react';
import { scroller } from 'react-scroll';

import style from './Header.module.scss';

const Header: FC = () => {
  const router = useRouter();

  const scroll = (sectionName: string) => {
    if (router.pathname !== '/') {
      router.push(`/#${sectionName}`);
      return;
    }

    scroller.scrollTo(sectionName, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -70,
    });
  };

  return (
    <header className={style.header}>
      <span className={style.link} onClick={() => scroll('algo')}>Как это работает</span>
      <span className={style.link} onClick={() => scroll('start')}>Начать работу</span>
    </header>
  );
};

export default Header;
