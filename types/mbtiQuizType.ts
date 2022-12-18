export type TMBTIQuiz = {
  question: string;
  answers: [number, number];
};

export type TMBTIQuizGroup = [TMBTIQuiz[], TMBTIQuiz[]];

export type TMBTIQuizTest = {
  organizing: TMBTIQuizGroup;
  communicability: TMBTIQuizGroup;
  practicality: TMBTIQuizGroup;
  logicality: TMBTIQuizGroup;
};
