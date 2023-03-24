import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import Vuetify from "vuetify"
import VueRouter from 'vue-router'
import router from './router'

Vue.use(Vuetify);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')