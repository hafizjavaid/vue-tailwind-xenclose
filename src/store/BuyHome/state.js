// eslint-disable-next-line import/prefer-default-export
export const state = () => ({
  displayCurrent: 0,
  optionsBag: [],
  validatedBag: [],
  residenceAddress: '',
  residenceType: '',
  residenceFaimly: '',
  residenceState: '',
  firstPageValidation: false,
  tempStatus: true,
  formSubmit: false,
  pageNumber: 1,
  // it is for the purpose of repalacing or null
  origionalQuestion: [
    {
      question: 'Where in the process are you ?',
      id: 'a',
      type: 'MCQS',
      options: [
        {
          id: 'a1',
          option: 'I\'m just researching',
          isSelected: false,
        },
        {
          id: 'a2',
          option: 'I\'m refinancing my home',
          isSelected: false,
        },
        {
          id: 'a3',
          option: 'I\'m buying a new home',
          isSelected: false,
        },
      ],
    },
    {
      question: 'Congrats! What\'s the the address of the home?',
      id: 'b',
      type: 'INPUTS',
      options: [
        {
          id: 'b1',
          option: 'Address',
          type: 'input',
          value: '',
        },
        {
          id: 'b2',
          option: 'Apt/Unit',
          type: 'input',
          value: '',
        },
        {
          id: 'b3',
          option: 'City',
          type: 'input',
          value: '',
        },
        {
          id: 'b4',
          option: 'State',
          type: 'input',
          value: '',
        },
        {
          id: 'b5',
          option: 'zipcode',
          type: 'input',
          value: '',
        },
      ],
    },
    {
      question: 'What\'s the purchase price ?',
      id: 'c',
      type: 'INPUTS',
      options: [
        {
          id: 'c1',
          option: 'Purchase',
          type: 'input',
          value: '',
        },
      ],
    },
    {
      question: 'What\'s your loan amount ?',
      id: 'd',
      type: 'INPUTS',
      options: [
        {
          id: 'd1',
          option: 'Loan',
          type: 'input',
          value: '',
        },
      ],
    },
    {
      question: 'What\'s your close date ?',
      id: 'e',
      type: 'INPUTS',
      options: [
        {
          id: 'e1',
          option: 'Date',
          type: 'input',
          value: '',
        },
      ],
    },
  ],
  questions: [
    {
      question: 'Where in the process are you ?',
      id: 'a',
      type: 'MCQS',
      options: [
        {
          id: 'a1',
          option: 'I\'m just researching',
          isSelected: false,
        },
        {
          id: 'a2',
          option: 'I\'m refinancing my home',
          isSelected: false,
        },
        {
          id: 'a3',
          option: 'I\'m buying a new home',
          isSelected: false,
        },
      ],
    },
    {
      question: 'Congrats! What\'s the the address of the home?',
      id: 'b',
      type: 'INPUTS',
      options: [
        {
          id: 'b1',
          option: 'Address',
          type: 'input',
          value: '',
        },
        {
          id: 'b2',
          option: 'Apt/Unit',
          type: 'input',
          value: '',
        },
        {
          id: 'b3',
          option: 'City',
          type: 'input',
          value: '',
        },
        {
          id: 'b4',
          option: 'State',
          type: 'input',
          value: '',
        },
        {
          id: 'b5',
          option: 'zipcode',
          type: 'input',
          value: '',
        },
      ],
    },
    {
      question: 'What\'s the purchase price ?',
      id: 'c',
      type: 'INPUTS',
      options: [
        {
          id: 'c1',
          option: 'Purchase',
          type: 'input',
          value: '',
        },
      ],
    },
    {
      question: 'What\'s your loan amount ?',
      id: 'd',
      type: 'INPUTS',
      options: [
        {
          id: 'd1',
          option: 'Loan',
          type: 'input',
          value: '',
        },
      ],
    },
    {
      question: 'What\'s your close date ?',
      id: 'e',
      type: 'INPUTS',
      options: [
        {
          id: 'e1',
          option: 'Date',
          type: 'input',
          value: '',
        },
      ],
    },
  ],
});
