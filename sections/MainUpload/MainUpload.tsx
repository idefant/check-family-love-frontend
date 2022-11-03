import { FC } from 'react';

import Button from '../../components/Button';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import Uploader from '../../components/Uploader';

import style from './MainUpload.module.scss';

const MainUpload: FC = () => (
  <section className={style.section}>
    <SectionTitle>Загрузите 3 фото в фас</SectionTitle>
    <Container>
      <div className={style.grid}>
        <Uploader theme="blue" />
        <div className={style.spinner} />
        <Uploader theme="pink" />
      </div>

      <Button className={style.wrongPhotosButton} theme="pink" outline>
        Какие фотографии не подойдут
      </Button>
    </Container>
  </section>
);

export default MainUpload;
