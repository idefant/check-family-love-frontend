import { useMemo, useState } from 'react';

import Layout from '../components/Layout';
import { UploaderContext } from '../components/Uploader';
import MainAlgo from '../sections/MainAlgo';
import MainGuide from '../sections/MainGuide';
import MainHero from '../sections/MainHero';
import MainQuiz from '../sections/MainQuiz';
import MainUpload from '../sections/MainUpload';
import { TAttachedImage } from '../types/imageType';

const Home = () => {
  const [maleImages, setMaleImages] = useState<TAttachedImage[]>([]);
  const [femaleImages, setFemaleImages] = useState<TAttachedImage[]>([]);

  const uploaderContextValue = useMemo(() => ({
    maleImages, femaleImages, setMaleImages, setFemaleImages,
  }), [femaleImages, maleImages]);

  return (
    <Layout>
      <UploaderContext.Provider value={uploaderContextValue}>
        <MainHero />
        <MainGuide />
        <MainAlgo />
        <MainUpload />
        <MainQuiz />
      </UploaderContext.Provider>
    </Layout>
  );
};

export default Home;
