import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import QuizMBTIBlock from '../../components/Quiz/QuizMBTIBlock';
import QuizSMOLBlock from '../../components/Quiz/QuizSMOLBlock';
import Row from '../../components/Row';
import SectionTitle from '../../components/SectionTitle';
import mbtiCommunicability from '../../data/quiz/mbti/mbtiCommunicability';
import mbtiLogicality from '../../data/quiz/mbti/mbtiLogicality';
import mbtiOrganizing from '../../data/quiz/mbti/mbtiOrganizing';
import mbtiPracticality from '../../data/quiz/mbti/mbtiPracticality';
import { isTrue } from '../../helpers/bool';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useEffectOnce from '../../hooks/useEffectOnce';
import { setMaleQuiz } from '../../store/reducers/formSlice';
import style from '../../styles/PersonalityQuiz.module.scss';
import { TMBTIQuizTest } from '../../types/mbtiQuizType';

type TMBTIGroupNames = 'organizing' | 'communicability' | 'practicality' | 'logicality';

type TForm = {
  mbti: {
    organizing: [string[], string[]];
    communicability: [string[], string[]];
    practicality: [string[], string[]];
    logicality: [string[], string[]];
  };
  smol: ('true' | 'false')[];
};

const QuizMale = () => {
  const dispatch = useAppDispatch();
  const { step } = useAppSelector((state) => state.form);
  const router = useRouter();
  const form = useForm<TForm>({ shouldUnregister: true });
  const { handleSubmit } = form;

  const onSubmit = (data: TForm) => {
    const formattedData = {
      mbti: Object.fromEntries(
        Object.entries(data.mbti).map(([category, groups]) => (
          [category as TMBTIGroupNames, groups.map((group) => group.map((item) => +item))]
        )),
      ) as unknown as TMBTIQuizTest,
      smol: data.smol.map(isTrue),
    };
    dispatch(setMaleQuiz(formattedData));
    router.push('/quiz/female');
  };

  useEffectOnce(() => {
    if (step !== 'male') {
      router.push('/#start');
    }
  });

  if (step !== 'male') return null;

  return (
    <Layout title="Психологический тест для мужчины">
      <section>
        <SectionTitle>Вопросы для мужчины</SectionTitle>
        <Container>
          <Row>
            <div className={style.content}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...form}>
                  <QuizMBTIBlock fieldPrefix="organizing.0" quizList={mbtiOrganizing[0]} />
                  <QuizMBTIBlock fieldPrefix="communicability.0" quizList={mbtiCommunicability[0]} />
                  <QuizMBTIBlock fieldPrefix="practicality.0" quizList={mbtiPracticality[0]} />
                  <QuizMBTIBlock fieldPrefix="logicality.0" quizList={mbtiLogicality[0]} />

                  <QuizMBTIBlock fieldPrefix="organizing.1" quizList={mbtiOrganizing[1]} />
                  <QuizMBTIBlock fieldPrefix="communicability.1" quizList={mbtiCommunicability[1]} />
                  <QuizMBTIBlock fieldPrefix="practicality.1" quizList={mbtiPracticality[1]} />
                  <QuizMBTIBlock fieldPrefix="logicality.1" quizList={mbtiLogicality[1]} />

                  <QuizSMOLBlock />
                </FormProvider>

                <Button theme="pink" className={style.submitButton} type="submit">
                  Перейти к тестированию девушки
                </Button>
              </form>
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default QuizMale;
