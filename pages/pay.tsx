import Image from 'next/image';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Radio from '../components/Radio';
import creditCardImg from '../public/img/payment/credit_card.png';
import qiwiImg from '../public/img/payment/qiwi.png';
import style from '../styles/Pay.module.scss';

const Pay = () => (
  <Layout>
    <section className={style.top}>
      <Container>
        <h1 className={style.title}>Оплатите заказ на анализ фотографий</h1>
        <div className={style.price}>Стоимость: 199 руб.</div>
      </Container>
    </section>

    <section className={style.pay}>
      <Container>
        <div className={style.payWrapper}>
          <h2 className={style.payTitle}>Выберите способ оплаты:</h2>

          <Radio name="payMethod">
            <div className={style.imageWrapper}>
              <Image src={creditCardImg} alt="Банковская карта" />
            </div>
            Банковская карта (VISA, Mastercard, МИР)
          </Radio>

          <Radio name="payMethod">
            <div className={style.imageWrapper}>
              <Image src={qiwiImg} alt="QIWI" />
            </div>
            QIWI
          </Radio>

          <Button className={style.submitButton}>Оплатить</Button>
        </div>
      </Container>
    </section>
  </Layout>
);

export default Pay;
