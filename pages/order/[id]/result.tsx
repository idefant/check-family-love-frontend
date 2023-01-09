import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Icon from '../../../components/Icons';
import Layout from '../../../components/Layout';
import Row from '../../../components/Row';
import SectionTitle from '../../../components/SectionTitle';
import { getOrderResultRequest } from '../../../helpers/request';
import useLoading from '../../../hooks/useLoading';
import useResettableState from '../../../hooks/useResettableState';
import loveHandsImg from '../../../public/img/love_hands.png';
import style from '../../../styles/Result.module.scss';
import { TResult } from '../../../types/resultType';

const Result = () => {
  const copyButtonText = useResettableState('Скопировать ссылку');
  const router = useRouter();
  const orderId = router.query.id;

  const [resultData, setResultData] = useState<TResult>();
  const loading = useLoading();

  useEffect(() => {
    if (!router.isReady) return;

    const isValidOrderId = typeof orderId === 'string' && !Number.isNaN(+orderId);
    if (!isValidOrderId) {
      router.push('/');
      return;
    }

    if (loading.status !== 'before') return;
    loading.start();

    (async () => {
      try {
        const res = await getOrderResultRequest(orderId);
        if (!res.data) return;
        setResultData(res.data);
        loading.stopOk();
      } catch {
        loading.stopFailed();
      }
    })();
  }, [loading, orderId, router]);

  const copyUrl = () => {
    navigator.clipboard.writeText(
      new URL(`order/${orderId}/result`, process.env.NEXT_PUBLIC_FRONTEND_URL).toString(),
    );
    copyButtonText.set('Скопировано!!!');
    setTimeout(copyButtonText.reset, 20_000);
  };

  return (
    <Layout title="Результат анализа">
      <SectionTitle>Результат анализа</SectionTitle>
      <section className={style.section}>
        <Container>
          <Row>
            <div className={style.content}>
              <h2 className={style.title}>Совместимость пары:</h2>

              <div className={style.compatibility}>
                <span className={style.compatibilityLabel}>в деловых отношениях</span>
                <span className={style.compatibilityDash}>–</span>
                <span className={style.compatibilityPercent}>
                  {resultData?.years_compatibility_str}
                </span>
              </div>

              <div className={style.compatibility}>
                <span className={style.compatibilityLabel}>в семейных отношениях</span>
                <span className={style.compatibilityDash}>–</span>
                <span className={style.compatibilityPercent}>
                  {resultData?.years_compatibility_str}
                </span>
              </div>

              <div className={style.characters}>
                <div className={classNames(style.card, style.cardMale)}>
                  <div className={style.cardTitle}>Характеристика мужчины:</div>
                  <div className={style.cardBody}>
                    <div>{`Тип личности: ${resultData?.male_personality_type}`}</div>
                    <div>{`Тип характера: ${resultData?.male_character_type}`}</div>
                  </div>
                </div>

                <Image src={loveHandsImg} alt="Совместимость" className={style.cardHandsImg} />

                <div className={classNames(style.card, style.cardFemale)}>
                  <div className={style.cardTitle}>Характеристика женщины:</div>
                  <div className={style.cardBody}>
                    <div>{`Тип личности: ${resultData?.female_personality_type}`}</div>
                    <div>{`Тип характера: ${resultData?.female_character_type}`}</div>
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
