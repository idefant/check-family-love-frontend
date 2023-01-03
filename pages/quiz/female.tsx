import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import QuizMBTIBlock from '../../components/Quiz/QuizMBTIBlock';
import QuizSMOLBlock from '../../components/Quiz/QuizSMOLBlock';
import Row from '../../components/Row';
import SectionTitle from '../../components/SectionTitle';
import StepPagination from '../../components/StepPagination';
import mbtiCommunicability from '../../data/quiz/mbti/mbtiCommunicability';
import mbtiLogicality from '../../data/quiz/mbti/mbtiLogicality';
import mbtiOrganizing from '../../data/quiz/mbti/mbtiOrganizing';
import mbtiPracticality from '../../data/quiz/mbti/mbtiPracticality';
import { isTrue } from '../../helpers/bool';
import popup from '../../helpers/popup';
import { createOrderRequest } from '../../helpers/request';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import useCounter from '../../hooks/useCounter';
import useEffectOnce from '../../hooks/useEffectOnce';
import { setFemaleQuiz } from '../../store/reducers/formSlice';
import style from '../../styles/PersonalityQuiz.module.scss';
import { TPhotosQuiz } from '../../types/imageType';
import { IntRange } from '../../types/numberType';
import { TMBTIQuizTest } from '../../types/quizType';

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

const QuizFemale = () => {
  const dispatch = useAppDispatch();
  const {
    pageName, photos, quiz, email,
  } = useAppSelector((state) => state.form);
  const router = useRouter();
  const availableStep = useCounter({ value: 1, max: 10 });
  const step = useCounter({ value: 1, min: 1, max: 9 });
  const form = useForm<TForm>({ shouldUnregister: true });
  const { watch: formWatch } = form;
  const { handleSubmit } = form;

  const onSubmit = async (data: TForm) => {
    const formattedData = {
      mbti: Object.fromEntries(
        Object.entries(data.mbti).map(([category, groups]) => (
          [category as TMBTIGroupNames, groups.map((group) => group.map((item) => +item))]
        )),
      ) as unknown as TMBTIQuizTest,
      smol: data.smol.map(isTrue),
    };
    dispatch(setFemaleQuiz(formattedData));

    if (!quiz.main || !quiz.personality.mbti.male || !quiz.personality.smol.male) return;

    try {
      const res = await createOrderRequest({
        quiz: {
          main: quiz.main,
          personality: {
            mbti: { male: quiz.personality.mbti.male, female: formattedData.mbti },
            smol: { male: quiz.personality.smol.male, female: formattedData.smol },
          },
        },
        photos: photos as TPhotosQuiz,
        email,
      });

      router.push(`/order/${res.data.id}/result`);
    } catch {
      popup.fire({ title: 'Произошла ошибка при отправке запроса', text: 'Попробуйте еще раз', icon: 'error' });
    }
  };

  useEffectOnce(() => {
    if (pageName !== 'female') {
      router.push('/#start');
    }
  });

  useEffect(() => {
    const subscription = formWatch((value) => {
      const checker = {
        1: () => value.mbti?.organizing?.[0]?.every((value) => value),
        2: () => value.mbti?.communicability?.[0]?.every((value) => value),
        3: () => value.mbti?.practicality?.[0]?.every((value) => value),
        4: () => value.mbti?.logicality?.[0]?.every((value) => value),
        5: () => value.mbti?.organizing?.[1]?.every((value) => value),
        6: () => value.mbti?.communicability?.[1]?.every((value) => value),
        7: () => value.mbti?.practicality?.[1]?.every((value) => value),
        8: () => value.mbti?.logicality?.[1]?.every((value) => value),
        9: () => value.smol?.every((value) => value),
      };
      if (checker[availableStep.value as IntRange<1, 10>]()) {
        availableStep.increment();
      }
    });
    return () => subscription.unsubscribe();
  }, [availableStep, formWatch]);

  if (pageName !== 'female') return null;

  return (
    <Layout title="Психологический тест для женщины">
      <section>
        <SectionTitle>Вопросы для женщины</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container className={style.container}>
            <StepPagination step={step} availableStepValue={availableStep.value} />

            <Row>
              <div className={style.content}>
                <FormProvider {...form}>
                  <QuizMBTIBlock fieldPrefix="organizing.0" quizList={mbtiOrganizing[0]} visible={step.value === 1} />
                  <QuizMBTIBlock fieldPrefix="communicability.0" quizList={mbtiCommunicability[0]} visible={step.value === 2} />
                  <QuizMBTIBlock fieldPrefix="practicality.0" quizList={mbtiPracticality[0]} visible={step.value === 3} />
                  <QuizMBTIBlock fieldPrefix="logicality.0" quizList={mbtiLogicality[0]} visible={step.value === 4} />

                  <QuizMBTIBlock fieldPrefix="organizing.1" quizList={mbtiOrganizing[1]} visible={step.value === 5} />
                  <QuizMBTIBlock fieldPrefix="communicability.1" quizList={mbtiCommunicability[1]} visible={step.value === 6} />
                  <QuizMBTIBlock fieldPrefix="practicality.1" quizList={mbtiPracticality[1]} visible={step.value === 7} />
                  <QuizMBTIBlock fieldPrefix="logicality.1" quizList={mbtiLogicality[1]} visible={step.value === 8} />

                  <QuizSMOLBlock visible={step.value === 9} />
                </FormProvider>
              </div>
            </Row>

            <StepPagination step={step} availableStepValue={availableStep.value} />
            {availableStep.value === 10 && step.value === 9 && (
              <Button theme="pink" className={style.submitButton} type="submit">
                Получить результат
              </Button>
            )}
          </Container>
        </form>
      </section>
    </Layout>
  );
};

export default QuizFemale;
