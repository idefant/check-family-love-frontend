import { FC } from 'react';
import { Element } from 'react-scroll';

import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

import style from './MainAlgo.module.scss';

const MainAlgo: FC = () => (
  <Element name="algo" style={{ marginTop: 75 }}>
    <section style={{ marginTop: -75 }}>
      <SectionTitle>Как это работает?</SectionTitle>
      <Container>
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
      </Container>
    </section>
  </Element>
);

export default MainAlgo;
