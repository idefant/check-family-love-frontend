export type TMainQuiz = {
  height_difference: number;
  weight_difference: number;
  age_difference: number;
  alcoholism: 'yes' | 'no';
  political_views_difference: 'yes' | 'no';
  leisure_preferences_coincide: 'match' | 'medium' | 'no_match';
  education_level: 'match' | 'no_match';
  salary: {
    male: number;
    female: number;
  };
  housing: 'own' | 'not_own' | 'mortgage';
  explore_together: 'always' | 'sometimes' | 'never';
  exchange_ideas: 'always' | 'sometimes' | 'never';
  economy_sector: {
    male: number[];
    female: number[];
  };
};

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

export type TSMOLQuiz = boolean[];

export type TQuiz = {
  main: TMainQuiz;
  personality: {
    mbti: {
      male: TMBTIQuizTest;
      female: TMBTIQuizTest;
    };
    smol: {
      male: TSMOLQuiz;
      female: TSMOLQuiz;
    };
  };
};
