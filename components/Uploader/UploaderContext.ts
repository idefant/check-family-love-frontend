import { createContext, Dispatch, SetStateAction } from 'react';

import noop from '../../helpers/noop';
import { TAttachedImage } from '../../types/imageType';

interface UploaderContextProps {
  maleImages: TAttachedImage[];
  femaleImages: TAttachedImage[];
  setMaleImages: Dispatch<SetStateAction<TAttachedImage[]>>;
  setFemaleImages: Dispatch<SetStateAction<TAttachedImage[]>>;
}

const UploaderContext = createContext<UploaderContextProps>({
  maleImages: [],
  femaleImages: [],
  setFemaleImages: noop,
  setMaleImages: noop,
});

export default UploaderContext;
