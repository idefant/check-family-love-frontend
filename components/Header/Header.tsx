import Link from 'next/link';
import { FC } from 'react';

import style from './Header.module.scss';

const links = [
  { title: 'Как это работает', url: '#' },
  { title: 'Начать работу', url: '#' },
];

const Header: FC = () => (
  <header className={style.header}>
    {links.map((link) => (
      <Link href={link.url} className={style.link} key={link.title}>
        {link.title}
      </Link>
    ))}
  </header>
);

export default Header;
