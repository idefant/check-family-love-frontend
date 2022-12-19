export type TMBTIQuiz = {
  question: string;
  answers: [string, string];
};

export type TMBTIQuizGroup = [TMBTIQuiz[], TMBTIQuiz[]];

export type TMBTIQuizTest = {
  organizing: TMBTIQuizGroup;
  communicability: TMBTIQuizGroup;
  practicality: TMBTIQuizGroup;
  logicality: TMBTIQuizGroup;
};
