import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyWorld from '@/components/MyWorld'
import P1 from '@/components/P1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myworld',
      name: 'MyWorld',
      component: MyWorld
    },
    {
      path: '/p1',
      name: 'P1',
      component: P1
    }
  ]
})
