import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles.css'
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
