import {withcat,boywithgirl,maneat,manwithdog} from  './images'

export default [
  {
    id: 0,
    type: 'FILL_IN_THE_BLANK',
    sentance: 'Je suis un',
    image: withcat,
    blank: '',
    options: ['fille', 'homme', 'garcon', 'chat'],
    correctAnswer: 'chat',
  },
  {
    id: 1,
    type: 'FILL_IN_THE_BLANK',
    sentance: 'un garcon et une',
    image: boywithgirl,

    blank: '',
    options: ['chat', 'homme', 'garcon', 'fille'],
    correctAnswer: 'fille',
  },
  {
    id: 2,
    type: 'FILL_IN_THE_BLANK',
    sentance: 'le garcon',
    image: maneat,

    blank: '',
    options: ['chien', 'mange', 'dorme', 'suis'],
    correctAnswer: 'mange',
  },
  {
    id: 3,
    type: 'FILL_IN_THE_BLANK',

    sentance: "l'homme avec son",
    image: manwithdog,

    blank: '',
    options: ['chien','chat','cheval'],
    correctAnswer: 'chien',
  },
];
