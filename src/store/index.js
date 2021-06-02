import { createStore } from 'vuex';
import { buyHome } from '@/store/BuyHome';

export default createStore({
  modules: {
    buyHome,
  },
  strict: true,
});
