import classNames from 'classnames';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { TMBTIQuiz } from '../../../types/quizType';
import Radio from '../../Radio';

import style from './QuizMBTIBlock.module.scss';

interface QuizMBTIBlockProps {
  visible?: boolean;
  quizList: TMBTIQuiz[];
  fieldPrefix: string;
}

const QuizMBTIBlock: FC<QuizMBTIBlockProps> = ({ quizList, fieldPrefix, visible = true }) => {
  const form = useFormContext();
  if (!form) return null;
  const { register } = form;

  return (
    <>
      {quizList.map((quiz, quizIndex) => (
        <div className={classNames(style.item, !visible && style.itemHidden)} key={quizIndex}>
          <div className={style.question}>{quiz.question}</div>
          {quiz.answers.map((answer, answerIndex) => (
            <Radio
              formData={register(`mbti.${fieldPrefix}.${quizIndex}`, { required: true })}
              value={answerIndex + 1}
              key={answerIndex}
            >
              {answer}
            </Radio>
          ))}
        </div>
      ))}
    </>
  );
};

export default QuizMBTIBlock;
