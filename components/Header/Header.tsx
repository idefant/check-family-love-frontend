/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { scrollTo } from '../../helpers/scroll';
import logoImg from '../../public/img/logo.png';
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
          <Image src={logoImg} alt="Logo" className={style.logo} />
          <nav className={style.nav}>
            <a className={style.link} onClick={(e) => scroll(e, 'algo')} href="/#algo">Как это работает</a>
            <a className={style.link} onClick={(e) => scroll(e, 'start')} href="/#start">Начать работу</a>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
