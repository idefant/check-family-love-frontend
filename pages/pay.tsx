import Image from 'next/image';

import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Radio from '../components/Radio';
import Row from '../components/Row';
import creditCardImg from '../public/img/payment/credit_card.png';
import qiwiImg from '../public/img/payment/qiwi.png';
import style from '../styles/Pay.module.scss';

const Pay = () => (
  <Layout>
    <section className={style.top}>
      <Container>
        <h1 className={style.topTitle}>Оплатите заказ на анализ фотографий</h1>
        <div className={style.topPrice}>Стоимость: 199 руб.</div>
      </Container>
    </section>

    <section className={style.pay}>
      <Container>
        <Row>
          <div className={style.payContent}>
            <h2 className={style.payTitle}>Выберите способ оплаты:</h2>

            <Radio name="payMethod">
              <Image src={creditCardImg} alt="Банковская карта" className={style.payMethodImg} />
              Банковская карта (VISA, Mastercard, МИР)
            </Radio>

            <Radio name="payMethod">
              <Image src={qiwiImg} alt="QIWI" className={style.payMethodImg} />
              QIWI
            </Radio>

            <Button className={style.submitButton}>Оплатить</Button>
          </div>
        </Row>
      </Container>
    </section>
  </Layout>
);

export default Pay;
