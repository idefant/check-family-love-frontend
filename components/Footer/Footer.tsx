import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import tgImg from '../../public/img/social/tg.png';
import vkImg from '../../public/img/social/vk.png';
import waImg from '../../public/img/social/wa.png';
import Container from '../Container';

import style from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.title}>Обратная связь:</div>
      <div className={style.icons}>
        <Link href="https://web.whatsapp.com/">
          <Image src={waImg} alt="WhatsApp" />
        </Link>
        <Link href="https://telegram.org/">
          <Image src={tgImg} alt="Telegram" />
        </Link>
        <Link href="https://vk.com/">
          <Image src={vkImg} alt="VK" />
        </Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
