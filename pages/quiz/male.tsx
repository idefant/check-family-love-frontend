import { FieldValues, useForm } from 'react-hook-form';

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
import style from '../../styles/PersonalityQuiz.module.scss';

const QuizMale = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Layout>
      <section>
        <SectionTitle>Вопросы для мужчины</SectionTitle>
        <Container>
          <Row>
            <div className={style.content}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <QuizMBTIBlock fieldPrefix="organizing.0" quizList={mbtiOrganizing[0]} register={register} />
                <QuizMBTIBlock fieldPrefix="communicability.0" quizList={mbtiCommunicability[0]} register={register} />
                <QuizMBTIBlock fieldPrefix="practicality.0" quizList={mbtiPracticality[0]} register={register} />
                <QuizMBTIBlock fieldPrefix="logicality.0" quizList={mbtiLogicality[0]} register={register} />

                <QuizMBTIBlock fieldPrefix="organizing.1" quizList={mbtiOrganizing[1]} register={register} />
                <QuizMBTIBlock fieldPrefix="communicability.1" quizList={mbtiCommunicability[1]} register={register} />
                <QuizMBTIBlock fieldPrefix="practicality.1" quizList={mbtiPracticality[1]} register={register} />
                <QuizMBTIBlock fieldPrefix="logicality.1" quizList={mbtiLogicality[1]} register={register} />

                <QuizSMOLBlock register={register} />

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
