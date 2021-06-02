// eslint-disable-next-line import/prefer-default-export
export const getters = {
  getPurchasePriceOptions: (state) => [
    state.questions[2].options[0].value,
    state.questions[3].options[0].value,
    state.questions[4].options[0].value,
  ],
  getNewAdressValues: (state) => [
    state.questions[1].options[0].value,
    state.questions[1].options[1].value,
    state.questions[1].options[2].value,
    state.questions[1].options[3].value,
    state.questions[1].options[4].value,
  ],
};
