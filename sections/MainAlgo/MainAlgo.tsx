import Image from 'next/image';
import { FC } from 'react';
import { Element } from 'react-scroll';

import Container from '../../components/Container';
import Row from '../../components/Row';
import SectionTitle from '../../components/SectionTitle';
import networkImg from '../../public/img/network.png';

import style from './MainAlgo.module.scss';

const MainAlgo: FC = () => (
  <Element name="algo">
    <section>
      <SectionTitle>Как это работает?</SectionTitle>
      <Container>
        <Row>
          <div className={style.content}>
            <Image src={networkImg} alt="Сеть" className={style.networkImg} />
            <div className={style.text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ea
                iste recusandae, laborum commodi dolore, corporis quidem dolorem hic
                officiis vitae! Soluta ut aperiam error pariatur maxime ducimus
                quibusdam eius. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Itaque ea iste recusandae, laborum commodi dolore, corporis
                quidem dolorem hic officiis vitae! Soluta ut aperiam error pariatur
                maxime ducimus quibusdam eius. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Itaque ea iste recusandae, laborum commodi dolore,
                corporis quidem dolorem hic officiis vitae!
              </p>

              <p>
                Soluta ut aperiam error pariatur maxime ducimus quibusdam eius. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Itaque ea iste
                recusandae, laborum commodi dolore, corporis quidem dolorem hic
                officiis vitae! Soluta ut aperiam error pariatur maxime ducimus
                quibusdam eius. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Itaque ea iste recusandae, laborum commodi dolore, corporis
                quidem dolorem hic officiis vitae! Soluta ut aperiam error pariatur
                maxime ducimus quibusdam eius.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  </Element>
);

export default MainAlgo;
