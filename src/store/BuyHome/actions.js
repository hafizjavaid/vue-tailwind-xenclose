import axios from '../../wrapper/axios';

const updateSideBar = (commit) => {
  commit('UPDATE_RESIDENCE_TYPE');
  commit('UPDATE_RESIDENCE_FAIMLY');
  commit('UPDATE_RESIDENCE_ADDRESS');
  commit('UPDATE_RESIDENCE_STATE');
};
const responseSuccess = (response, commit) => {
  console.log(response);
  //  set the provided key in web storage
  localStorage.setItem('questionnaire-secret', response.data.id);
  commit('INCREMENT_PAGE_NUMBER');
  commit('UPDATE_SUBMIT_FORM');
  updateSideBar(commit);
};

const updateQuestionnaireWithSavedResponse = (response, commit) => {
  // using the questionnaire from server
  commit('UPDATE_QUESTIONNAIRE', JSON.parse(response.data.response));
  commit('VALIDATE_SAVED_FORM');
  updateSideBar(commit);
};

const saveQuestionnaire = (endPoint, formBody, state, commit, whatShoulditDo) => axios.post(`/questionnaire/${endPoint}`, formBody)
  .then((RESPONSE) => {
    whatShoulditDo(RESPONSE, commit);
  });
/* eslint-disable import/prefer-default-export */
export const actions = {
  storeQuestionnaire({ state, commit }) {
    const response = new URLSearchParams();
    console.log(state.questions);
    response.append('questionnaireResponse', JSON.stringify(state.questions));
    saveQuestionnaire('response', response, state, commit, responseSuccess);
  },
  updateQuestionnaire({ state, commit }) {
    const questionnaire = localStorage.getItem('questionnaire-secret');
    if (questionnaire) {
      const formBody = new URLSearchParams();
      formBody.append('id', questionnaire);
      formBody.append('questionnaire', JSON.stringify(state.questions));
      saveQuestionnaire('update', formBody, state, commit, responseSuccess);
    }
  },
  incrementPageNumber({ commit }) {
    commit('INCREMENT_PAGE_NUMBER');
    commit('UPDATE_SUBMIT_FORM');
  },
  decrementPageNumber({ commit }) {
    commit('DECREMENT_PAGE_NUMBER');
  },
  getQuestionnaire({ state, commit }) {
    const questionnaire = localStorage.getItem('questionnaire-secret');
    if (questionnaire) {
      const formBody = new URLSearchParams();
      formBody.append('id', questionnaire);
      saveQuestionnaire('get', formBody, state, commit, updateQuestionnaireWithSavedResponse);
    }
  },
};
