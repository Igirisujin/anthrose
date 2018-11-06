import Vue from 'vue';
import './plugins/bootstrap-vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
