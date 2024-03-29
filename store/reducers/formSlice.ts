import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TPhotosQuiz } from '../../types/imageType';
import { TMainQuiz, TMBTIQuizAnswers, TSMOLQuiz } from '../../types/quizType';

type FormState = {
  quiz: {
    main?: TMainQuiz;
    personality: {
      mbti: {
        male?: TMBTIQuizAnswers;
        female?: TMBTIQuizAnswers;
      };
      smol: {
        male?: TSMOLQuiz;
        female?: TSMOLQuiz;
      };
    };
  };
  photos: Partial<TPhotosQuiz>;
  email?: string;
  pageName: 'main' | 'male' | 'female';
};

const initialState: FormState = {
  quiz: {
    personality: {
      mbti: {},
      smol: {},
    },
  },
  photos: {},
  pageName: 'main',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setMainQuiz(
      state,
      { payload }: PayloadAction<{ quiz: TMainQuiz; photos: TPhotosQuiz; email?: string }>,
    ) {
      state.quiz.main = payload.quiz;
      state.photos = payload.photos;
      state.email = payload.email;
      state.pageName = 'male';
    },
    setMaleQuiz(
      state,
      { payload: quiz }: PayloadAction<{ mbti: TMBTIQuizAnswers; smol: TSMOLQuiz }>,
    ) {
      state.quiz.personality.mbti.male = quiz.mbti;
      state.quiz.personality.smol.male = quiz.smol;
      state.pageName = 'female';
    },
    setFemaleQuiz(
      state,
      { payload: quiz }: PayloadAction<{ mbti: TMBTIQuizAnswers; smol: TSMOLQuiz }>,
    ) {
      state.quiz.personality.mbti.female = quiz.mbti;
      state.quiz.personality.smol.female = quiz.smol;
    },
  },
});

export const { setMainQuiz, setMaleQuiz, setFemaleQuiz } = formSlice.actions;

export default formSlice.reducer;
