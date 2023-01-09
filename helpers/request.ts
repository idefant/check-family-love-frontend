import axios from 'axios';

import { TMainQuiz } from '../types/quizType';

const server = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

interface createOrderRequestDataType {
  famaly_love_quiz: Omit<TMainQuiz, 'salary' | 'economy_sector'> & {
    salary_male: number;
    salary_female: number;
    economy_sector_male: number[];
    economy_sector_female: number[];
  };
  mbti_quiz_male: {
    first_organizing: (1 | 2)[];
    first_communicability: (1 | 2)[];
    first_practicality: (1 | 2)[];
    first_logicality: (1 | 2)[];
    second_organizing: (1 | 2)[];
    second_communicability: (1 | 2)[];
    second_practicality: (1 | 2)[];
    second_logicality: (1 | 2)[];
  };
  mbti_quiz_female: {
    first_organizing: (1 | 2)[];
    first_communicability: (1 | 2)[];
    first_practicality: (1 | 2)[];
    first_logicality: (1 | 2)[];
    second_organizing: (1 | 2)[];
    second_communicability: (1 | 2)[];
    second_practicality: (1 | 2)[];
    second_logicality: (1 | 2)[];
  };
  smol_quiz_male: {
    quiz: boolean[];
  };
  smol_quiz_female: {
    quiz: boolean[];
  };
  images: {
    male_images: [string, string, string];
    female_images: [string, string, string];
  };
  is_send_to_email?: boolean;
  email?: string;
}

export const createOrderRequest = (data: createOrderRequestDataType) => (
  server.post('/v1/compatibility_quiz/', data)
);

export const getOrderResultRequest = (orderId: number | string) => (
  server.get(`/v1/compatibility_quiz/${orderId}/result`)
);
