import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index.js";
import Vuelidate from 'vuelidate'
import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

import './assets/styles/main.css';

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
