import { MBTIQuiz, MBTIQuizGroup } from '../../../types/mbti';

const mbtiLogicalityFirst: MBTIQuiz[] = [
  {
    question: 'Выберите подходящее:',
    answers: [
      'Эмоции не затрагивают Вас глубоко',
      'Вы человек глубоких переживаний и чувств',
    ],
  },
  {
    question: 'Вы можете охарактеризовать себя как человека:',
    answers: [
      'Твердый',
      'Мягкосердечный',
    ],
  },
  {
    question: 'Обычно вы выбираете:',
    answers: [
      'Преимущество',
      'Удача',
    ],
  },
  {
    question: 'Вы лучше разбираетесь в:',
    answers: [
      'технологиях и структурах',
      'чувствах и отношениях',
    ],
  },
  {
    question: 'Вы охотнее:',
    answers: [
      'анализируете и упорядочиваете',
      'общаетесь с близкими людьми',
    ],
  },
  {
    question: 'Выберите подходящее:',
    answers: [
      'Вы скорее человек твердый, чем мягкий',
      'Вы скорее человек мягкий, чем твердый',
    ],
  },
  {
    question: 'Выберите подходящее:',
    answers: [
      'Считаете, что важнее быть правым, чем приятным',
      'Склонны к компромиссам в делах ради сохранения хороших отношений',
    ],
  },
];

const mbtiLogicalitySecond: MBTIQuiz[] = [
  {
    question: 'Окружающие больше ценят Вашу:',
    answers: [
      'логичность',
      'человечность',
    ],
  },
  {
    question: 'Выберите подходящее:',
    answers: [
      'Вы человек хладнокровный и спокойный',
      'Чаще Вы человек сердечный и участливый',
    ],
  },
  {
    question: 'Обычно вы выбираете:',
    answers: [
      'Принципы',
      'Эмоции',
    ],
  },
  {
    question: 'Выберите подходящее:',
    answers: [
      'Вы любите анализировать и устанавливать логический порядок',
      'Вы стремитесь к гармоничным отношениям с людьми',
    ],
  },
  {
    question: 'Вас больше привлекает:',
    answers: [
      'последовательность и логичность рассуждении',
      'гармоничность человеческих отношений',
    ],
  },
  {
    question: 'Ваши суждения о людях основаны на:',
    answers: [
      'правилах чаще, чем на обстоятельствах',
      'обстоятельствах чаще, чем на правилах',
    ],
  },
  {
    question: 'Вы можете охарактеризовать себя как человека:',
    answers: [
      'Склонного к критике',
      'Доброжелательного',
    ],
  },
];

const mbtiLogicality: MBTIQuizGroup = [mbtiLogicalityFirst, mbtiLogicalitySecond];

export default mbtiLogicality;