import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { TMBTIQuiz } from '../../../types/mbtiQuizType';
import Radio from '../../Radio';

import style from './QuizMBTIBlock.module.scss';

interface QuizMBTIBlockProps {
  quizList: TMBTIQuiz[];
  fieldPrefix: string;
  register: UseFormRegister<any>;
}

const QuizMBTIBlock: FC<QuizMBTIBlockProps> = ({ quizList, fieldPrefix, register }) => (
  <>
    {quizList.map((quiz, quizIndex) => (
      <div className={style.item} key={quizIndex}>
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

export default QuizMBTIBlock;
