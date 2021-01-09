import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueGtag from 'vue-gtag'
import vueHeadful from 'vue-headful'

Vue.component('vue-headful', vueHeadful)

Vue.use(VueGtag, {
  config: { id: 'UA-165288040-1' }
}, router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
