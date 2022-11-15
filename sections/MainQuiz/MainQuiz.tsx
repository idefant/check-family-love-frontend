import { FC, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Container from '../../components/Container';
import Quiz from '../../components/Quiz';
import Row from '../../components/Row';
import SectionTitle from '../../components/SectionTitle';
import TextInput from '../../components/TextInput';
import { resolvePath } from '../../helpers/pathResolver';

import style from './MainQuiz.module.scss';

const questionQueue = [
  ['height_difference'],
  ['weight_difference'],
  ['age_difference'],
  ['alcoholism'],
  ['political_views_difference'],
  ['leisure_preferences_coincide'],
  ['education_level'],
  ['salary.male', 'salary.female'],
  ['housing'],
  ['explore_together'],
  ['exchange_ideas'],
];

const MainQuiz: FC = () => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const [actualQuestionNumber, setActualQuestionNumber] = useState(1);

  useEffect(() => {
    const subscription = watch((value) => {
      const paths = questionQueue[actualQuestionNumber - 1];
      if (paths?.every((field) => resolvePath(value, field))) {
        setActualQuestionNumber((state) => state + 1);
      }
    });
    return () => subscription.unsubscribe();
  }, [actualQuestionNumber, watch]);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <section className={style.section}>
      <SectionTitle>Ответьте на 12 вопросов:</SectionTitle>
      <Container>
        <Row>
          <div className={style.content}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Quiz.Card number={1} question="Разница в росте (Рм-Рж)">
                <Quiz.Input
                  withError={!!errors.height_difference}
                  units="см"
                  formData={register('height_difference', { required: true, pattern: /^[0-9 ]+$/ })}
                  placeholder="12"
                />
              </Quiz.Card>

              <Quiz.Card
                number={2}
                question="Разница в весе (Вм-Вж)"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Input
                  withError={!!errors.weight_difference}
                  units="кг"
                  formData={register('weight_difference', { required: true, pattern: /^[0-9 ]+$/ })}
                  placeholder="12"
                />
              </Quiz.Card>

              <Quiz.Card
                number={3}
                question="Разница в возрасте (Вм-Вж)"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Input
                  withError={!!errors.age_difference}
                  units="лет"
                  formData={register('age_difference', { required: true, pattern: /^[0-9 ]+$/ })}
                  placeholder="12"
                />
              </Quiz.Card>

              <Quiz.Card
                number={4}
                question="Склонность к алкоголизму у кого-то одного"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Есть"
                  value="yes"
                  formData={register('alcoholism', { required: true })}
                />
                <Quiz.Radio
                  text="Нет"
                  value="no"
                  formData={register('alcoholism', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={5}
                question="Разница в политических взглядах"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Есть"
                  value="yes"
                  formData={register('political_views_difference', { required: true })}
                />
                <Quiz.Radio
                  text="Нет"
                  value="no"
                  formData={register('political_views_difference', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={6}
                question="Предпочтения в досуге"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Совпадают"
                  value="match"
                  formData={register('leisure_preferences_coincide', { required: true })}
                />
                <Quiz.Radio
                  text="50/50"
                  value="medium"
                  formData={register('leisure_preferences_coincide', { required: true })}
                />
                <Quiz.Radio
                  text="Не совпадают"
                  value="no_match"
                  formData={register('leisure_preferences_coincide', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={7}
                question="Уровень образования (среднее, бакалавр, магистр)"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Совпадают"
                  value="match"
                  formData={register('education_level', { required: true })}
                />
                <Quiz.Radio
                  text="Не совпадают"
                  value="no_match"
                  formData={register('education_level', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={8}
                question="Уровень зарплаты ($м, $ж)"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Input
                  withError={!!(errors.salary as any)?.male}
                  units="₽"
                  formData={register('salary.male', { required: true, pattern: /^[0-9 ]+$/ })}
                  placeholder="50 000"
                  description="М:"
                />
                <Quiz.Input
                  withError={!!(errors.salary as any)?.female}
                  units="₽"
                  formData={register('salary.female', { required: true, pattern: /^[0-9 ]+$/ })}
                  placeholder="50 000"
                  description="Ж:"
                />
              </Quiz.Card>

              <Quiz.Card
                number={9}
                question="Квартира"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Своя"
                  value="own"
                  formData={register('housing', { required: true })}
                />
                <Quiz.Radio
                  text="Не своя"
                  value="not_own"
                  formData={register('housing', { required: true })}
                />
                <Quiz.Radio
                  text="Ипотека"
                  value="mortgage"
                  formData={register('housing', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={10}
                question="Узнаете что-то новое вместе"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Всегда"
                  value="always"
                  formData={register('explore_together', { required: true })}
                />
                <Quiz.Radio
                  text="Иногда"
                  value="sometimes"
                  formData={register('explore_together', { required: true })}
                />
                <Quiz.Radio
                  text="Никогда"
                  value="never"
                  formData={register('explore_together', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={11}
                question="Обмениваетесь идеями"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Всегда"
                  value="always"
                  formData={register('exchange_ideas', { required: true })}
                />
                <Quiz.Radio
                  text="Иногда"
                  value="sometimes"
                  formData={register('exchange_ideas', { required: true })}
                />
                <Quiz.Radio
                  text="Никогда"
                  value="never"
                  formData={register('exchange_ideas', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={12}
                question="Приоритетная для обоих отрасль экономики совпадает (строительство, туризм, медицина и т.д.)"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Radio
                  text="Да"
                  value="yes"
                  formData={register('economy_branch_coincide', { required: true })}
                />
                <Quiz.Radio
                  text="Нет"
                  value="no"
                  formData={register('economy_branch_coincide', { required: true })}
                />
              </Quiz.Card>

              <div className={style.sendMail}>
                <Checkbox align="center" formData={register('is_need_send_mail')}>
                  Отправить результат на почту
                </Checkbox>

                <TextInput
                  id="send_email"
                  disabled={!watch().is_need_send_mail}
                  label="Email"
                  placeholder="Email"
                  formData={register('email', {
                    required: watch().is_need_send_mail,
                    pattern: watch().is_need_send_mail ? /\S+@\S+\.\S+/ : undefined,
                  })}
                  withError={!!errors.email}
                />
              </div>

              <Button theme="pink" className={style.submitButton} type="submit">
                Запустить анализ фотографий
              </Button>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default MainQuiz;
