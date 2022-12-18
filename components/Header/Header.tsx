/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from 'next/router';
import { FC } from 'react';

import { scrollTo } from '../../helpers/scroll';
import Container from '../Container';

import style from './Header.module.scss';

const Header: FC = () => {
  const router = useRouter();

  const scroll = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionName: string,
  ) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push(`/#${sectionName}`);
      return;
    }
    scrollTo(sectionName);
  };

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerInner}>
          <a className={style.link} onClick={(e) => scroll(e, 'algo')} href="/#algo">Как это работает</a>
          <a className={style.link} onClick={(e) => scroll(e, 'start')} href="/#start">Начать работу</a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
