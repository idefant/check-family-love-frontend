import { useRouter } from 'next/router';
import {
  FC, useContext, useEffect, useState,
} from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Container from '../../components/Container';
import Quiz from '../../components/Quiz';
import Row from '../../components/Row';
import SectionTitle from '../../components/SectionTitle';
import TextInput from '../../components/TextInput';
import { UploaderContext } from '../../components/Uploader';
import economyBranches from '../../data/economyBranches';
import { vdInt, vdNum } from '../../helpers/form';
import num, { strToNum } from '../../helpers/math';
import { resolvePath } from '../../helpers/pathResolver';
import popup from '../../helpers/popup';
import { scrollTo } from '../../helpers/scroll';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setMainQuiz } from '../../store/reducers/formSlice';
import { TMainQuiz } from '../../types/quizType';

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
  ['economy_sector.male'],
];

type TForm = TMainQuiz & {
  processing_personal_data: boolean;
  service_terms: boolean;
  is_need_send_mail: boolean;
  email: string;
};

const MainQuiz: FC = () => {
  const router = useRouter();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<TForm>({ shouldUnregister: true });

  const [actualQuestionNumber, setActualQuestionNumber] = useState(1);
  const { maleImages, femaleImages } = useContext(UploaderContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscription = watch((value) => {
      const paths = questionQueue[actualQuestionNumber - 1];

      const isValid = paths?.every((path) => {
        const fieldValue = resolvePath(value, path);
        if (typeof fieldValue === 'number') {
          return !Number.isNaN(fieldValue);
        }
        return !!fieldValue;
      });

      if (isValid) {
        setActualQuestionNumber((state) => state + 1);
      }
    });
    return () => subscription.unsubscribe();
  }, [actualQuestionNumber, watch]);

  const onSubmit = (data: TForm) => {
    const quiz = {
      ...data,
      economy_sector: {
        male: data.economy_sector.male.map((i) => +i),
        female: data.economy_sector.female.map((i) => +i),
      },
      email: undefined,
      is_need_send_mail: undefined,
      service_terms: undefined,
    };

    if (maleImages.length !== 3 || femaleImages.length !== 3) {
      scrollTo('start', { duration: 0, delay: 0 });
      popup.fire({
        title: 'Необходимо загрузить по 3 изображения каждого человека',
        icon: 'warning',
      });
      return;
    }

    const photos = {
      male: maleImages.map((image) => image.base64) as [string, string, string],
      female: femaleImages.map((image) => image.base64) as [string, string, string],
    };

    dispatch(setMainQuiz({ quiz, photos, email: data.is_need_send_mail ? data.email : undefined }));

    router.push('/quiz/male');
  };

  return (
    <section className={style.section}>
      <SectionTitle>Ответьте на 13 вопросов:</SectionTitle>
      <Container>
        <Row>
          <div className={style.content}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Quiz.Card
                number={1}
                question="Разница в росте (Рм-Рж)"
                error={errors.height_difference?.message}
              >
                <Quiz.Input
                  withError={!!errors.height_difference}
                  units="см"
                  formData={register('height_difference', {
                    required: true,
                    min: -60,
                    max: 60,
                    validate: { vdNum, vdInt },
                    setValueAs: strToNum(),
                  })}
                  placeholder="12"
                />
              </Quiz.Card>

              <Quiz.Card
                number={2}
                question="Разница в весе (Вм-Вж)"
                actualQuestionNumber={actualQuestionNumber}
                error={errors.weight_difference?.message}
              >
                <Quiz.Input
                  withError={!!errors.weight_difference}
                  units="кг"
                  formData={register('weight_difference', {
                    required: true,
                    min: -585,
                    max: 585,
                    validate: { vdNum, vdInt },
                    setValueAs: strToNum(),
                  })}
                  placeholder="12"
                />
              </Quiz.Card>

              <Quiz.Card
                number={3}
                question="Разница в возрасте (Вм-Вж)"
                actualQuestionNumber={actualQuestionNumber}
                error={errors.age_difference?.message}
              >
                <Quiz.Input
                  withError={!!errors.age_difference}
                  units="лет"
                  formData={register('age_difference', {
                    required: true,
                    min: -83,
                    max: 83,
                    validate: { vdNum, vdInt },
                    setValueAs: strToNum(),
                  })}
                  placeholder="12"
                />
              </Quiz.Card>

              <Quiz.Card
                number={4}
                question="Склонность к алкоголизму у кого-то одного"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[{ text: 'Есть', value: 'yes' }, { text: 'Нет', value: 'no' }]}
                  fieldName="alcoholism"
                  formData={register('alcoholism', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={5}
                question="Разница в политических взглядах"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[{ text: 'Есть', value: 'yes' }, { text: 'Нет', value: 'no' }]}
                  fieldName="political_views_difference"
                  formData={register('political_views_difference', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={6}
                question="Предпочтения в досуге"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[
                    { text: 'Совпадают', value: 'Совпадают' },
                    { text: '50/50', value: '50/50' },
                    { text: 'Не совпадают', value: 'Не совпадают' },
                  ]}
                  fieldName="leisure_preferences_coincide"
                  formData={register('leisure_preferences_coincide', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={7}
                question="Уровень образования (среднее, бакалавр, магистр)"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[
                    { text: 'Совпадают', value: 'Совпадают' },
                    { text: 'Не совпадают', value: 'Не совпадают' },
                  ]}
                  fieldName="education_level"
                  formData={register('education_level', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                error={errors.salary?.male?.message || errors.salary?.female?.message}
                number={8}
                question="Уровень зарплаты"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.Input
                  withError={!!(errors.salary as any)?.male}
                  units="₽"
                  formData={register('salary.male', {
                    required: true,
                    min: 0,
                    max: 10_000_000,
                    validate: { vdNum, vdInt },
                    setValueAs: strToNum(),
                  })}
                  placeholder="50 000"
                  description="М:"
                />
                <Quiz.Input
                  withError={!!(errors.salary as any)?.female}
                  units="₽"
                  formData={register('salary.female', {
                    required: true,
                    min: 0,
                    max: 10_000_000,
                    validate: { vdNum, vdInt },
                    setValueAs: strToNum(),
                  })}
                  placeholder="50 000"
                  description="Ж:"
                />
              </Quiz.Card>

              <Quiz.Card
                number={9}
                question="Квартира"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[
                    { text: 'Своя', value: 'Своя' },
                    { text: 'Не своя', value: 'Не своя' },
                    { text: 'Ипотека', value: 'Ипотека' },
                  ]}
                  fieldName="housing"
                  formData={register('housing', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={10}
                question="Узнаете что-то новое вместе"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[
                    { text: 'Всегда', value: 'Всегда' },
                    { text: 'Иногда', value: 'Иногда' },
                    { text: 'Никогда', value: 'Нет' },
                  ]}
                  fieldName="explore_together"
                  formData={register('explore_together', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={11}
                question="Обмениваетесь идеями"
                actualQuestionNumber={actualQuestionNumber}
              >
                <Quiz.RadioGroup
                  dataList={[
                    { text: 'Всегда', value: 'Всегда' },
                    { text: 'Иногда', value: 'Иногда' },
                    { text: 'Никогда', value: 'Нет' },
                  ]}
                  fieldName="exchange_ideas"
                  formData={register('exchange_ideas', { required: true })}
                />
              </Quiz.Card>

              <Quiz.Card
                number={12}
                question="Приоритетная для отрасль экономики мужчины (3-5 элементов)"
                actualQuestionNumber={actualQuestionNumber}
                error={errors.economy_sector?.male?.message}
              >
                <div>
                  {economyBranches.map((economyBranch, i) => (
                    <Checkbox
                      value={i + 1}
                      formData={register('economy_sector.male', {
                        validate: (value) => (
                          num(value?.length).between(3, 5)
                            || 'Должно быть выбрано от 3 до 5 вариантов'
                        ),
                      })}
                      key={i}
                    >
                      {economyBranch}
                    </Checkbox>
                  ))}
                </div>
              </Quiz.Card>

              <Quiz.Card
                number={13}
                question="Приоритетная для отрасль экономики женщины (3-5 элементов)"
                actualQuestionNumber={actualQuestionNumber}
                error={errors.economy_sector?.female?.message}
              >
                <div>
                  {economyBranches.map((economyBranch, i) => (
                    <Checkbox
                      value={i + 1}
                      formData={register('economy_sector.female', {
                        validate: (value) => (
                          num(value?.length).between(3, 5)
                            || 'Должно быть выбрано от 3 до 5 вариантов'
                        ),
                      })}
                      key={i}
                    >
                      {economyBranch}
                    </Checkbox>
                  ))}
                </div>
              </Quiz.Card>

              <div className={style.additionalForm}>
                <Checkbox formData={register('processing_personal_data', { required: true })}>
                  Я даю
                  {' '}
                  <a href="/personal_data_consent" target="_blank">
                    согласие на обработку персональных данных
                  </a>
                </Checkbox>

                <Checkbox formData={register('service_terms', { required: true })}>
                  Я согласен с
                  {' '}
                  <a href="/service_terms" target="_blank">условиями предоставления услуг</a>
                </Checkbox>

                <Checkbox formData={register('is_need_send_mail')}>
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
                  withError={watch().is_need_send_mail && !!errors.email}
                />
              </div>

              <Button
                theme="pink"
                className={style.submitButton}
                onClick={(e) => e.currentTarget.blur()}
                type="submit"
                disabled={actualQuestionNumber < 13}
              >
                Продолжить заполнение
              </Button>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default MainQuiz;
