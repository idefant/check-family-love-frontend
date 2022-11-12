import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import tgImg from '../../public/img/social/tg.png';
import vkImg from '../../public/img/social/vk.png';
import waImg from '../../public/img/social/wa.png';
import Container from '../Container';

import style from './Footer.module.scss';

const social = [
  { url: 'https://web.whatsapp.com/', icon: <Image src={waImg} alt="WhatsApp" /> },
  { url: 'https://telegram.org/', icon: <Image src={tgImg} alt="Telegram" /> },
  { url: 'https://vk.com/', icon: <Image src={vkImg} alt="VK" /> },
];

const Footer: FC = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.title}>Обратная связь:</div>
      <div className={style.icons}>
        {social.map((link, i) => (
          <Link href={link.url} target="_blank" rel="noopener" key={i}>
            {link.icon}
          </Link>
        ))}
      </div>
    </Container>
  </footer>
);

export default Footer;
