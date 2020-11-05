import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
//Se debe importar el archivo donde están los routers en el main
import router from '@/router'
import {dollarFilter, percentFilter} from '@/filters'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

// y acá hacer la instancia de es router, si el archivo tiene el mismo nombre de la importación, no hay necesidad de hacer el llamdo así
// router: 'router', si no que directamente se puede colocar solo router y
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
