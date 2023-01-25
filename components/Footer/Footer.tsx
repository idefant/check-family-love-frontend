import Link from 'next/link';
import { FC } from 'react';

import Container from '../Container';
import Icon from '../Icons';

import style from './Footer.module.scss';

const social = [
  { url: 'https://web.whatsapp.com/', icon: <Icon.WhatsApp /> },
  { url: 'https://telegram.org/', icon: <Icon.Telegram /> },
  { url: 'https://vk.com/', icon: <Icon.VK /> },
];

const Footer: FC = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.footerInner}>
        <div className={style.docsColumn}>
          <div className={style.navTitle}>Документы:</div>
          <div>
            <a href="/personal_data_consent" className={style.navLink} target="_blank">
              Согласие на обработку персональных данных
            </a>
            <a href="/service_terms" className={style.navLink} target="_blank">
              Условия предоставления услуг
            </a>
          </div>
        </div>

        <div className={style.social}>
          <div className={style.navTitle}>Обратная связь:</div>
          <div className={style.socialIcons}>
            {social.map((link, i) => (
              <Link
                href={link.url}
                className={style.socialLink}
                target="_blank"
                rel="noopener"
                key={i}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
