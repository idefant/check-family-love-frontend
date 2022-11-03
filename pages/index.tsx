import Layout from '../components/Layout';
import MainAlgo from '../sections/MainAlgo';
import MainGuide from '../sections/MainGuide';
import MainHero from '../sections/MainHero';
import MainQuiz from '../sections/MainQuiz';
import MainUpload from '../sections/MainUpload';

const Home = () => (
  <Layout>
    <MainHero />
    <MainGuide />
    <MainAlgo />
    <MainUpload />
    <MainQuiz />
  </Layout>
);

export default Home;
