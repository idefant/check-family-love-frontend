import { FC } from 'react';
import { Element } from 'react-scroll';

import Button from '../../components/Button';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import Uploader from '../../components/Uploader';
import useModal from '../../hooks/useModal';
import WrongPhotosModal from '../../modals/WrongPhotosModal';

import style from './MainUpload.module.scss';

const MainUpload: FC = () => {
  const helpModal = useModal();

  return (
    <Element name="start">
      <section className={style.section}>
        <SectionTitle>Загрузите 3 фото в фас</SectionTitle>
        <Container>
          <div className={style.grid}>
            <Uploader theme="blue" />
            <div className={style.spinner} />
            <Uploader theme="pink" />
          </div>

          <Button className={style.wrongPhotosButton} theme="pink" outline onClick={helpModal.open}>
            Какие фотографии не подойдут
          </Button>
        </Container>
      </section>

      <WrongPhotosModal modal={helpModal} />
    </Element>
  );
};

export default MainUpload;
