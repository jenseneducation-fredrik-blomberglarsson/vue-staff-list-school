import Vue from 'vue'
import App from './App.vue'
import router from './router'
import json from './assets/employee.json'

Vue.config.productionTip = false

new Vue({
  router,

  data: () => ({
    employee: json.employee
  }),
  render: h => h(App)
}).$mount('#app')
