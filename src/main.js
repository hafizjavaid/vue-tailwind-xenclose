import { createApp } from 'vue';
import VueGtag from 'vue-gtag-next';
import VueAxios from 'vue-axios';
import axios from './wrapper/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

createApp(App)
  .use(VueGtag, {
    property: {
      id: '264029662',
    },
  })
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount('#app');
