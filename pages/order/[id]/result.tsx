import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Icon from '../../../components/Icons';
import Layout from '../../../components/Layout';
import Row from '../../../components/Row';
import SectionTitle from '../../../components/SectionTitle';
import useResettableState from '../../../hooks/useResettableState';
import loveHandsImg from '../../../public/img/love_hands.png';
import style from '../../../styles/Result.module.scss';

const Result = () => {
  const copyButtonText = useResettableState('Скопировать ссылку');
  const router = useRouter();

  const copyUrl = () => {
    navigator.clipboard.writeText(
      new URL(`result/${router.query.id}`, process.env.NEXT_PUBLIC_FRONTEND_URL).toString(),
    );
    copyButtonText.set('Скопировано!!!');
    setTimeout(copyButtonText.reset, 20_000);
  };

  return (
    <Layout>
      <SectionTitle>Результат анализа</SectionTitle>
      <section className={style.section}>
        <Container>
          <Row>
            <div className={style.content}>
              <h2 className={style.title}>Совместимость пары:</h2>

              <div className={style.compatibility}>
                <span className={style.compatibilityLabel}>в деловых отношениях</span>
                <span className={style.compatibilityDash}>–</span>
                <span className={style.compatibilityPercent}>100 %</span>
              </div>

              <div className={style.compatibility}>
                <span className={style.compatibilityLabel}>в семейных отношениях</span>
                <span className={style.compatibilityDash}>–</span>
                <span className={style.compatibilityPercent}>1 %</span>
              </div>

              <div className={style.characters}>
                <div className={classNames(style.card, style.cardMale)}>
                  <div className={style.cardTitle}>Характеристика мужчины:</div>
                  <div className={style.cardBody}>
                    <div>Тип личности: истерический</div>
                    <div>Тип характера: шизоидный</div>
                  </div>
                </div>

                <Image src={loveHandsImg} alt="Совместимость" className={style.cardHandsImg} />

                <div className={classNames(style.card, style.cardFemale)}>
                  <div className={style.cardTitle}>Характеристика женщины:</div>
                  <div className={style.cardBody}>
                    <div>Тип личности: истерический</div>
                    <div>Тип характера: шизоидный</div>
                  </div>
                </div>
              </div>

              <Button className={style.copyButton} onClick={copyUrl}>
                <Icon.Copy />
                {copyButtonText.value}
              </Button>

              <div className={style.copyExplanation}>
                Вы можете скопировать ссылку, нажав на кнопку выше, чтобы поделиться со своим
                партнером
              </div>

              <Link href="/" className={style.goMainLink}>
                <Button theme="pink" outline className={style.goMainButton}>
                  Вернуться на главную страницу
                </Button>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Result;
