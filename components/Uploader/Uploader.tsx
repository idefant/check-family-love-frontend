import classNames from 'classnames';
import Image from 'next/image';
import {
  ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState,
} from 'react';

import { genId } from '../../helpers/random';
import uploadImg from '../../public/img/upload.png';
import { TAttachedPhoto } from '../../types/photoType';
import Icon from '../Icons';

import style from './Uploader.module.scss';

interface UploaderProps {
  theme: 'blue' | 'pink';
  imageUrls: TAttachedPhoto[];
  setImageUrls: Dispatch<SetStateAction<TAttachedPhoto[]>>;
}

const Uploader: FC<UploaderProps> = ({ theme, imageUrls, setImageUrls }) => {
  const [images, setImages] = useState<File[]>([]);
  const needImagesCount = 3 - imageUrls.length;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!images.length) return;

    const newImageUrls = images.slice(0, needImagesCount)
      .map((image) => ({ id: genId(), url: URL.createObjectURL(image) }));
    setImageUrls([...imageUrls, ...newImageUrls]);
    setImages([]);
  }, [imageUrls, images, needImagesCount, setImageUrls]);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages(Array.from(e.target.files));
  };

  const clickToInput = () => inputRef.current?.click();

  const removeImage = (id: string) => {
    setImageUrls(imageUrls.filter((imageUrl) => imageUrl.id !== id));
  };

  return (
    <div
      className={classNames(
        style.uploader,
        theme === 'blue' && style.uploaderBlue,
        theme === 'pink' && style.uploaderPink,
      )}
    >
      <div className={style.photos}>
        {imageUrls.map((imageUrl) => (
          <div className={style.photoContainer} key={imageUrl.id}>
            <Image className={style.photoImage} width={0} height={0} src={imageUrl.url} alt="" />
            <button
              type="button"
              className={style.photoRemoveButton}
              onClick={() => removeImage(imageUrl.id)}
            >
              <Icon.X />
            </button>
          </div>
        ))}
        {[...Array(needImagesCount)].map((_, i) => (
          <div className={style.photoPlaceholder} onClick={clickToInput} key={i} />
        ))}
      </div>

      <button
        className={style.uploadButton}
        type="button"
        onClick={clickToInput}
        disabled={imageUrls.length >= 3}
      >
        <Image src={uploadImg} alt="" />
      </button>

      <input
        type="file"
        className={style.hiddenFileInput}
        multiple
        accept="image/*"
        onChange={onImageChange}
        ref={inputRef}
      />
    </div>
  );
};

export default Uploader;
