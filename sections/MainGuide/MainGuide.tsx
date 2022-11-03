import { FC } from "react";
import Image from "next/image";
import Container from "../../components/Container";
import style from "./MainGuide.module.scss";
import uploadImg from "../../public/img/guide/1.png";
import answerImg from "../../public/img/guide/2.png";
import paymentImg from "../../public/img/guide/3.png";
import resultImg from "../../public/img/guide/4.png";

const MainGuide: FC = () => (
  <section className={style.section}>
    <Container>
      <div className={style.grid}>
        <div className={style.item}>
          <Image src={uploadImg} alt="" />
          <div className={style.itemPink}>
            Загрузите по 3 фото в фас парня и девушки
          </div>
        </div>

        <div className={style.item}>
          <Image src={answerImg} alt="" />
          <div className={style.itemBlue}>Ответьте на несколько вопросов</div>
        </div>

        <div className={style.item}>
          <Image src={resultImg} alt="" />
          <div className={style.itemBlue}>Получите результат</div>
        </div>

        <div className={style.item}>
          <Image src={paymentImg} alt="" />
          <div className={style.itemPink}>Заплатите 199 руб.</div>
        </div>
      </div>
    </Container>
  </section>
);

export default MainGuide;
