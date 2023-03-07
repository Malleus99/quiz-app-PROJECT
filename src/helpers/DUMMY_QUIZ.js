export const DUMMY_QUIZ = [
  {
    id: 'xzxzxz1',
    name: 'Math Quiz',
    questions: [
      {
        question: 'Which is greater than 4?',
        answers: ['5', '-5', '-1/2', '-25'],
        solution: '5 is greater than 4.',
        rightAnswer: '5',
      },
      {
        question: 'Which is the smallest?',
        answers: ['-1', '0', '-1/2', '3'],
        solution: 'The smallest number is -1.',
        rightAnswer: '-1',
      },
      {
        question: 'Combine terms: 12a + 26b -4b – 16a.',
        answers: ['4a + 22b', '-28a + 30b', '-4a + 22b', '28a + 30b'],
        solution: '12a + 26b -4b – 16a = 12a – 16a + 26b – 4b = -4a + 22b.',
        rightAnswer: '-4a + 22b',
      },
      {
        question: 'Simplify: (4 – 5) – (13 – 18 + 2).',
        answers: ['-1', '-2', '1', '2'],
        solution:
          '(4 – 5) – (13 – 18 + 2 = -1-(13+2-18)= -1-(15-18) = -1-(-3)= -1+3= 2',
        rightAnswer: '2',
      },
      {
        question: 'What is |-26|?',
        answers: ['-26', '26', '0', '1'],
        solution: '|-26| = 26',
        rightAnswer: '26',
      },
    ],
  },
  {
    id: 'zberhti16',
    name: 'Chemistry Quiz',
    questions: [
      {
        question:
          'One of the essential minerals in the human body is salt. How much salt (NaCl) is in the average adult human body?',
        answers: ['1 kilogram', '250 grams', '500 grams', 'practically none'],
        solution:
          "The average adult human body contains about 250 grams of salt, which is just over half a pound. If you don't have enough salt, your body suffers an electrolyte imbalance called hyponatremia",
        rightAnswer: '250 grams',
      },
      {
        question:
          'If you fill a glass to the brim with ice water and the ice melts, what will happen?',
        answers: [
          'The glass will over flow as the ice turns to water.',
          'The level of water in the glass will remain unchanged as the ice melts.',
          'The water level will drop slightly as the ice melts.',
          "I'll never find out because I'll drink the water or walk away before anything happens.",
        ],
        solution:
          'One interesting property of water is that it achieves maximum density as a liquid, not as a solid. So, ice is less dense than water and floats. When it melts, it becomes more dense. More mass per unit volume means the level of the liquid drops slightly.',
        rightAnswer: 'The water level will drop slightly as the ice melts.',
      },
      {
        question:
          'The symbol Sb stands for stibnum or stibnite. What is the modern name of this element?',
        answers: ['Seaborgium', 'Antimony', 'Samarium', 'Arsenic'],
        solution:
          "Stibnum is the old name for antimony. Be careful you don't confuse the symbol with Sn for tin (a common tricky chemistry test question). Tin is safe enough to use to make cans for food. Antimony and most of its compounds are toxic.",
        rightAnswer: 'Antimony',
      },
      {
        question:
          'DNA codes for proteins, which are the building blocks of organisms. What is the most abundant protein in the human body?',
        answers: ['Tubulin', 'Collagen', 'Keratin', 'Albumin'],
        solution:
          "You'll find keratin primarily in your hair, nails, and skin, but the most abundant protein in humans is collagen, which is found in bone and cartilage. Both proteins are strong and flexible.",
        rightAnswer: 'Collagen',
      },
      {
        question:
          "Noble gases are inert because they have completed outer electron shells. Which of these elements isn't a noble gas?",
        answers: ['Helium', 'Chlorine', 'Argon', 'Krypton'],
        solution:
          "Chlorine is not a noble gas. It's one electron shy of a full octet, so unlike the noble gases, it's highly reactive.",
        rightAnswer: 'Chlorine',
      },
    ],
  },
];
