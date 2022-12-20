import Image from 'next/image';
import { FC } from 'react';

import Modal from '../../components/Modal';
import { TModal } from '../../hooks/useModal';
import wrongImg1 from '../../public/img/wrong_photos/1.png';
import wrongImg2 from '../../public/img/wrong_photos/2.png';
import wrongImg3 from '../../public/img/wrong_photos/3.png';
import wrongImg4 from '../../public/img/wrong_photos/4.png';
import wrongImg5 from '../../public/img/wrong_photos/5.png';
import wrongImg6 from '../../public/img/wrong_photos/6.png';

import style from './WrongPhotosModal.module.scss';

interface ModalProps {
  modal: TModal;
}

const WrongPhotosModal: FC<ModalProps> = ({ modal }) => (
  <Modal
    title="Какие фотографии не подойдут?"
    modal={modal}
  >
    <div className={style.content}>
      <div className={style.text}>
        <ul>
          <li>В аксессуаре, частично закрывающем лицо(очки, маска, головной убор)</li>
          <li>Некоторые части лица обрезаны кадром</li>
          <li>На фотографии находится несколько человек</li>
          <li>Фотографии с искажением лица, вызванным эмоциями</li>
          <li>Лицо направлено не в кадр</li>
        </ul>
      </div>

      <div className={style.photos}>
        <Image src={wrongImg1} alt="Фото в очках" />
        <Image src={wrongImg2} alt="Фото с частично закрытым лицом" />
        <Image src={wrongImg3} alt="Фото с группой людей" />
        <Image src={wrongImg4} alt="Фото с искажением эмоций" />
        <Image src={wrongImg5} alt="Фото с частично закрытым лицом" />
        <Image src={wrongImg6} alt="Фото с сильным поворотом головы" />
      </div>
    </div>
  </Modal>
);

export default WrongPhotosModal;
