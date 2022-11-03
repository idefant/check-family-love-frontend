import { FC } from "react";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import style from "./MainAlgo.module.scss";

const MainAlgo: FC = () => (
  <section>
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
);

export default MainAlgo;
