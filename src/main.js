import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import vuetify from '@/plugins/vuetify'
//import router from './router'
import {routes} from './routes'

//import '@babel/polyfill'
//import 'mutationobserver-shim'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'


Vue.directive('font-size', {
  bind: (el,binding,vnode) => {
    el.style.fontSize = binding.value +'px'
    el.style.fontWeight = 'bold'
    console.log(binding)
    console.log(vnode)
  },
  updated: (el ) => {
    el.style.fontSize = '24px'
    el.style.fontWeight = 'bold'
  },
})

Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  vuetify,
}).$mount('#app')
