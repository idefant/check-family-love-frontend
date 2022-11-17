import { useRouter } from 'next/router';
import { FC } from 'react';
import { scroller } from 'react-scroll';

import Container from '../Container';

import style from './Header.module.scss';

const Header: FC = () => {
  const router = useRouter();

  const scroll = (sectionName: string) => {
    if (router.pathname !== '/') {
      router.push(`/#${sectionName}`);
      return;
    }

    const headerElement = document.getElementsByTagName('header')[0]?.clientHeight;

    scroller.scrollTo(sectionName, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: headerElement ? -headerElement : 0,
    });
  };

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerInner}>
          <span className={style.link} onClick={() => scroll('algo')}>Как это работает</span>
          <span className={style.link} onClick={() => scroll('start')}>Начать работу</span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
