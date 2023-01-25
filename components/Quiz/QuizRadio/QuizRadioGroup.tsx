import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import QuizRadio from './QuizRadio';

interface QuizRadioGroupProps {
  dataList: {
    text: ReactNode;
    value?: string;
  }[];
  formData?: UseFormRegisterReturn<string>;
  className?: string;
  fieldName: string;
}

const QuizRadioGroup: FC<QuizRadioGroupProps> = ({ dataList, formData, className, fieldName }) => (
  <>
    {dataList.map(({ text, value }) => (
      <QuizRadio
        id={`${fieldName}.${value}`}
        key={value}
        {...{ text, value, formData, className }}
      />
    ))}
  </>
);

export default QuizRadioGroup;
