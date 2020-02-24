import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldExample from '@/components/HelloWorld_Example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'HelloWorld_Example',
      component: HelloWorldExample
    }
  ]
})
