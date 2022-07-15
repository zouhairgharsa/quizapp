import SumApp from '../screens/SumApp';
import DiceGame from '../screens/DiceGame';
import QuizGame from '../screens/QuizGame';
import QuestionWithOptions from '../screens/QuestionWithOptions';
import FillTheBlank from '../screens/FillTheBlank';
import TranslateSentance from '../screens/TranslateSentance';
import ColorsApp from '../screens/ColorsApp';
export const topics = [
  {
    id: 0,
    name: 'Q with Options',
    level: 2,
    progress: 1,
    page: QuestionWithOptions,
    active: true,
  },
  {
    id: 1,
    name: 'Fill the blank',
    level: 2,
    progress: 1,
    page: FillTheBlank,
    active: true,
  },
  {
    id: 2,
    name: 'Translate Sentance',
    level: 2,
    progress: 1,
    page: TranslateSentance,
    active: true,
  },
  {
    id: 3,
    name: 'Sum App',
    level: 1,
    progress: 0.3,
    page: SumApp,
    active: true,
  },
  {
    id: 4,
    name: 'Dice Game',
    level: 2,
    progress: 1,
    page: DiceGame,
    active: true,
  },
  {
    id: 5,
    name: 'Quiz Game',
    level: 2,
    progress: 1,
    page: QuizGame,
    active: true,
  },
  {
    id: 5,
    name: 'ColorsApp',
    level: 2,
    progress: 1,
    page: QuizGame,
    active: false,
  },
];
