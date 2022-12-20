/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { scrollTo } from '../../helpers/scroll';
import useBoolean from '../../hooks/useBoolean';
import logoImg from '../../public/img/logo.png';
import Container from '../Container';
import Hamburger from '../Hamburger';
import MobileMenu from '../MobileMenu';

import style from './Header.module.scss';

const Header: FC = () => {
  const router = useRouter();
  const isMobileMenuOpened = useBoolean();

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
          <Link href="/" onClick={isMobileMenuOpened.setFalse} className={style.logoLink}>
            <Image src={logoImg} alt="Logo" className={style.logo} />
          </Link>
          <nav className={style.nav}>
            <a className={style.link} onClick={(e) => scroll(e, 'algo')} href="/#algo">
              Как это работает
            </a>
            <a className={style.link} onClick={(e) => scroll(e, 'start')} href="/#start">
              Начать работу
            </a>
          </nav>
          <Hamburger isOpen={isMobileMenuOpened.value} toggle={isMobileMenuOpened.toggle} />
        </div>
      </Container>

      <MobileMenu isOpen={isMobileMenuOpened.value} close={isMobileMenuOpened.setFalse} />
    </header>
  );
};

export default Header;
