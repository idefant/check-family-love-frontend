import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';

import { scrollTo } from '../../helpers/scroll';
import Footer from '../Footer';
import Header from '../Header';

import style from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  title = 'Оценка продолжительности совместной жизни с вашим партнером',
}) => {
  const router = useRouter();

  useEffect(() => {
    const sectionName = router.asPath.split('#')[1];
    if (!sectionName) return;
    scrollTo(sectionName, { duration: 0, delay: 0 });
  }, [router.asPath]);

  return (
    <div className={style.content}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Сервис оценки продолжительности совместной жизни. Автоматическое определение нейронной сетью типа личности, характера Вас и вашего партнера, социометрических данных и оценка на основе статистики браков/разводов"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
