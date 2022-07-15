import {
  girl,
  woman,
  boy,
  man,
  dog,
  horse,
  croissant,
  pizza,
  un,
  orange,
} from './images';

export const questionsWithOptions = [
  {
    id: 0,
    title: 'Which one of these is “the woman”?',
    options: [
      {
        id: 'option0',
        image: boy,
        text: 'le garcon',
      },
      {
        id: 'option1',
        image: woman,
        text: 'la femme',
        correct: true,
      },
      {
        id: 'option2',
        image: man,
        text: "l'homme",
      },
      {
        id: 'option3',
        image: girl,
        text: 'la fille',
      },
    ],
  },
  {
    id: 1,
    title: 'Which one of these is “the dog”?',
    options: [
      {
        id: 'option0',
        image: dog,
        text: 'le chien',
        correct: true,
      },
      {
        id: 'option1',
        image: horse,
        text: 'le chevel',
      },
      {
        id: 'option2',
        image: man,
        text: "l'homme",
      },
      {
        id: 'option3',
        image: girl,
        text: 'la fille',
      },
    ],
  },
  {
    id: 2,
    title: 'Which one of these is “the man?',
    options: [
      {
        id: 'option0',
        image: boy,
        text: 'le garcon',
      },
      {
        id: 'option1',
        image: woman,
        text: 'la femme',
      },
      {
        id: 'option2',
        image: man,
        text: "l'homme",
        correct: true,
      },
      {
        id: 'option3',
        image: girl,
        text: 'la fille',
      },
    ],
  },
  {
    id: 3,
    title: 'Which one of these is “the pizza”?',
    options: [
      {
        id: 'option0',
        image: orange,
        text: 'Orange',
      },
      {
        id: 'option1',
        image: pizza,
        text: 'le Pizza',
        correct: true,
      },
      {
        id: 'option2',
        image: croissant,
        text: 'le croissant',
      },
      {
        id: 'option3',
        image: un,
        text: 'un',
      },
    ],
  },
];
