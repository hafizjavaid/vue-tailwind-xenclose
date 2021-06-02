import { state } from '@/store/BuyHome/state';
import { mutations } from '@/store/BuyHome/mutations';
import { actions } from '@/store/BuyHome/actions';
import { getters } from './getters';

// eslint-disable-next-line import/prefer-default-export
export const buyHome = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
