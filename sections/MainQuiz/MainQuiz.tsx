import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Container from '../../components/Container';
import QuizCard from '../../components/QuizCard';
import SectionTitle from '../../components/SectionTitle';
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
    <section>
      <SectionTitle>Ответьте на 12 вопросов:</SectionTitle>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <QuizCard number={1} question="Разница в росте (Рм-Рж)">
            <div>
              <input
                type="text"
                className={classNames(errors.height_difference && style.inputError)}
                {...register('height_difference', { required: true, pattern: /^[0-9 ]+$/ })}
              />
              см
            </div>
          </QuizCard>

          <QuizCard
            number={2}
            question="Разница в весе (Вм-Вж)"
            actualQuestionNumber={actualQuestionNumber}
          >
            <div>
              <input
                type="text"
                className={classNames(errors.weight_difference && style.inputError)}
                {...register('weight_difference', { required: true, pattern: /^[0-9 ]+$/ })}
              />
              кг
            </div>
          </QuizCard>

          <QuizCard
            number={3}
            question="Разница в возрасте (Вм-Вж)"
            actualQuestionNumber={actualQuestionNumber}
          >
            <div>
              <input
                type="text"
                className={classNames(errors.age_difference && style.inputError)}
                {...register('age_difference', { required: true, pattern: /^[0-9 ]+$/ })}
              />
              Лет
            </div>
          </QuizCard>

          <QuizCard
            number={4}
            question="Склонность к алкоголизму у кого-то одного"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input type="radio" {...register('alcoholism', { required: true })} value="yes" />
              Есть
            </label>
            <label>
              <input type="radio" {...register('alcoholism', { required: true })} value="no" />
              Нет
            </label>
          </QuizCard>

          <QuizCard
            number={5}
            question="Разница в политических взглядах"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input
                type="radio"
                {...register('political_views_difference', { required: true })}
                value="yes"
              />
              Есть
            </label>
            <label>
              <input
                type="radio"
                {...register('political_views_difference', { required: true })}
                value="no"
              />
              Нет
            </label>
          </QuizCard>

          <QuizCard
            number={6}
            question="Предпочтения в досуге"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input
                type="radio"
                {...register('leisure_preferences_coincide', { required: true })}
                value="match"
              />
              Совпадают
            </label>
            <label>
              <input
                type="radio"
                {...register('leisure_preferences_coincide', { required: true })}
                value="medium"
              />
              50/50
            </label>
            <label>
              <input
                type="radio"
                {...register('leisure_preferences_coincide', { required: true })}
                value="no_match"
              />
              Не совпадают
            </label>
          </QuizCard>

          <QuizCard
            number={7}
            question="Уровень образования (среднее, бакалавр, магистр)"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input
                type="radio"
                {...register('education_level', { required: true })}
                value="match"
              />
              Совпадают
            </label>
            <label>
              <input
                type="radio"
                {...register('education_level', { required: true })}
                value="no_match"
              />
              Не совпадают
            </label>
          </QuizCard>

          <QuizCard
            number={8}
            question="Уровень зарплаты ($м, $ж)"
            actualQuestionNumber={actualQuestionNumber}
          >
            <div>
              <input
                type="text"
                className={classNames((errors.salary as any)?.male && style.inputError)}
                {...register('salary.male', {
                  required: true,
                  pattern: /^[0-9 ]+$/,
                })}
              />
              Рублей(М)
            </div>

            <div>
              <input
                type="text"
                className={classNames((errors.salary as any)?.female && style.inputError)}
                {...register('salary.female', {
                  required: true,
                  pattern: /^[0-9 ]+$/,
                })}
              />
              Рублей(Ж)
            </div>
          </QuizCard>

          <QuizCard
            number={9}
            question="Квартира"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input type="radio" {...register('housing', { required: true })} value="own" />
              Своя
            </label>
            <label>
              <input type="radio" {...register('housing', { required: true })} value="not_own" />
              Не своя
            </label>
            <label>
              <input type="radio" {...register('housing', { required: true })} value="mortgage" />
              Ипотека
            </label>
          </QuizCard>

          <QuizCard
            number={10}
            question="Узнаете что-то новое вместе"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input
                type="radio"
                {...register('explore_together', { required: true })}
                value="always"
              />
              Всегда
            </label>
            <label>
              <input
                type="radio"
                {...register('explore_together', { required: true })}
                value="sometimes"
              />
              Иногда
            </label>
            <label>
              <input
                type="radio"
                {...register('explore_together', { required: true })}
                value="never"
              />
              Никогда
            </label>
          </QuizCard>

          <QuizCard
            number={11}
            question="Обмениваетесь идеями"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input
                type="radio"
                {...register('exchange_ideas', { required: true })}
                value="always"
              />
              Всегда
            </label>
            <label>
              <input
                type="radio"
                {...register('exchange_ideas', { required: true })}
                value="sometimes"
              />
              Иногда
            </label>
            <label>
              <input
                type="radio"
                {...register('exchange_ideas', { required: true })}
                value="never"
              />
              Никогда
            </label>
          </QuizCard>

          <QuizCard
            number={12}
            question="Приоритетная для обоих отрасль экономики совпадает (строительство, туризм, медицина и т.д.)"
            actualQuestionNumber={actualQuestionNumber}
          >
            <label>
              <input
                type="radio"
                {...register('economy_branch_coincide', { required: true })}
                value="yes"
              />
              Да
            </label>
            <label>
              <input
                type="radio"
                {...register('economy_branch_coincide', { required: true })}
                value="no"
              />
              Нет
            </label>
          </QuizCard>

          <Button theme="pink" className={style.submitButton} type="submit">
            Запустить анализ фотографий
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default MainQuiz;
