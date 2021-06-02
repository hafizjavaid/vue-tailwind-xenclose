const MCQS = 'MCQS';
const INPUTS = 'INPUTS';
const retreiveMCQs = (state) => state.questions.filter((question) => MCQS === question.type);
const retreiveWithId = (state, type, id) => {
  const result = [];
  for (let i = 0; i < state.questions.length; i += 1) {
    if (state.questions[i].id === id && state.questions[i].type === type) {
      result.push(state.questions[i]);
    }
  }
  return result;
};

const validateStoredForm = (state) => {
// get the third level of first question
  const thirdLevel = state.questions[0].options[2];
  console.log(thirdLevel);
  // check if it is checked
  if (thirdLevel.isSelected) {
    state.formSubmit = true;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const mutations = {
  UPDATE_VALIDATION_BAG: (state) => {
    state.validatedBag.push(state.optionsBag);
  },
  UPDATE_RESIDENCE_UNITS: (state, value) => {
    state.residenceUnits = value;
  },
  REMOVE_OPTION_FROM_BAG: (state, value) => {
    if (state.optionsBag.indexOf(value) > -1) {
      state.optionsBag.splice(state.optionsBag.indexOf(value), 1);
    }
    state.formSubmit = false;
  },
  FLUSH_OPTION_BAG: (state) => {
    state.optionsBag = [];
  },
  UPDATE_DISPLAY_CURRENT: (state, value) => {
    for (let i = 0; i < state.optionsBag.length; i += 1) {
      if (value[0] === state.optionsBag[i][0]) {
        state.optionsBag.splice(i, 1);
      }
    }
    console.log(value);
    state.optionsBag.push(value);
    switch (value) {
      case 'a1': {
        state.displayCurrent = 1;
        state.formSubmit = false;
        state.questions[1] = JSON.parse(JSON.stringify(state.origionalQuestion[1]));
        break;
      }
      case 'a2': {
        state.displayCurrent = 2;
        state.formSubmit = false;
        state.questions[1] = JSON.parse(JSON.stringify(state.origionalQuestion[1]));
        break;
      }
      case 'a3': {
        state.displayCurrent = 3;
        break;
      }
      case 'b': {
        state.formSubmit = true;
        break;
      }
      default: {
        state.displayCurrent = 0;
      }
    }
  },
  FLUSH_DISPLAY_SCREEN: (state) => {
    state.displayCurrent = 0;
  },
  UPDATE_MULTIPLE_CHOICE_QUESTIONS: (state, params) => {
    const mcqsQuestions = retreiveWithId(state, MCQS, params.questionId)[0];
    //  look for the option
    for (let j = 0; j < mcqsQuestions.options.length; j += 1) {
      if (mcqsQuestions.options[j].id === params.optionId) {
        //  update the option
        mcqsQuestions.options[j].isSelected = true;
      } else {
        mcqsQuestions.options[j].isSelected = false;
      }
    }
  },
  RESET_MULTIPLE_CHOICE_QUESTIONS: (state, id) => {
    const mcqs = retreiveMCQs(state, id)[0];
    for (let i = 0; i < mcqs.length; i += 1) {
      mcqs[i].isSelected = false;
    }
  },
  ADD_NEW_PROPERTY_ADDRESS: (state, params) => {
    /* eslint-disable prefer-destructuring */
    for (let i = 0; i < params.length; i += 1) {
      state.questions[1].options[i].value = params[i];
    }
    state.formSubmit = true;
  },
  UPDATE_SUBMIT_FORM: (state) => {
    state.formSubmit = !state.formSubmit;
  },
  INCREMENT_PAGE_NUMBER: (state) => {
    state.pageNumber += 1;
  },
  DECREMENT_PAGE_NUMBER: (state) => {
    state.pageNumber -= 1;
  },
  ADD_PURCHASE_LOAN_DATE: (state, params) => {
    /* eslint-disable  prefer-destructuring */
    retreiveWithId(state, INPUTS, 'c')[0].options[0].value = params[0];
    retreiveWithId(state, INPUTS, 'd')[0].options[0].value = params[1];
    retreiveWithId(state, INPUTS, 'e')[0].options[0].value = params[2];
    state.formSubmit = true;
  },
  UPDATE_ORIGIONAL_QUESTIONNAIRE: (state) => {
    state.origionalQuestion = JSON.parse(JSON.stringify(state.questions));
  },
  UPDATE_QUESTIONNAIRE: (state, newValue) => {
    state.questions = newValue;
  },
  RESET_PAGE_NUMBER: (state) => {
    state.pageNumber = 1;
  },
  UPDATE_RESIDENCE_TYPE: (state) => {
    state.residenceType = 'primary residence';
  },
  UPDATE_RESIDENCE_FAIMLY: (state) => {
    state.residenceFaimly = 'Single Faimly';
  },
  UPDATE_RESIDENCE_ADDRESS: (state) => {
    state.residenceAddress = state.questions[1].options[0].value;
  },
  UPDATE_RESIDENCE_STATE: (state) => {
    state.residenceState = state.questions[1].options[3].value;
  },
  VALIDATE_SAVED_FORM: (state) => {
    console.log('validating ...');
    validateStoredForm(state);
  },
};
