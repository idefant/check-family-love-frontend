export type MBTIQuiz = {
  question: string;
  answers: [string, string];
};

export type MBTIQuizGroup = [MBTIQuiz[], MBTIQuiz[]];
