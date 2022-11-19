import { useState } from 'react';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Row from '../../components/Row';
import SectionTitle from '../../components/SectionTitle';
import Uploader from '../../components/Uploader';
import useModal from '../../hooks/useModal';
import WrongPhotosModal from '../../modals/WrongPhotosModal';
import style from '../../styles/Problem.module.scss';
import { TAttachedImage } from '../../types/imageType';

const Problem = () => {
  const helpModal = useModal();

  const [manImageUrls, setManImageUrls] = useState<TAttachedImage[]>([]);
  const [womanImageUrls, setWomanImageUrls] = useState<TAttachedImage[]>([]);

  return (
    <Layout>
      <section className={style.section}>
        <SectionTitle>Замена противоречивых фото</SectionTitle>
        <Container>
          <Row>
            <div className={style.content}>
              <div className={style.grid}>
                <Uploader theme="blue" imageUrls={manImageUrls} setImageUrls={setManImageUrls} />
                <Uploader theme="pink" imageUrls={womanImageUrls} setImageUrls={setWomanImageUrls} />
              </div>

              <Button className={style.wrongPhotosButton} theme="pink" outline onClick={helpModal.open}>
                Какие фотографии не подойдут
              </Button>
            </div>
          </Row>
        </Container>
      </section>

      <WrongPhotosModal modal={helpModal} />
    </Layout>
  );
};

export default Problem;
