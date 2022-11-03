import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import uploadImg from '../../public/img/upload.png';

import style from './Uploader.module.scss';

interface UploaderProps {
  theme: 'blue' | 'pink';
}

const Uploader: FC<UploaderProps> = ({ theme }) => (
  <div
    className={classNames(
      style.uploader,
      theme === 'blue' && style.uploaderBlue,
      theme === 'pink' && style.uploaderPink,
    )}
  >
    <div className={style.photos}>
      <div className={style.photo}>
        <Image src="" alt="" />
      </div>

      <div className={style.photo}>
        <Image src="" alt="" />
      </div>

      <div className={style.photo}>
        <Image src="" alt="" />
      </div>
    </div>

    <button className={style.uploadButton} type="button">
      <Image src={uploadImg} alt="" />
    </button>
  </div>
);

export default Uploader;
