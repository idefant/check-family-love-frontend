import axios from 'axios';

import { TPhotosQuiz } from '../types/imageType';
import { TQuiz } from '../types/quizType';

const server = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

export const createOrderRequest = (data: { quiz: TQuiz; photos: TPhotosQuiz; email?: string }) => (
  server.post('/create_order', data)
);
