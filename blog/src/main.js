import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app')
