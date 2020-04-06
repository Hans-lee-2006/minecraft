import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyWorld from '@/components/MyWorld'
import P1 from '@/components/P1'
import P2 from '@/components/P2'
import P3 from '@/components/P3'
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
    },
    {
      path: '/p2',
      name: 'P2',
      component: P2
    },
    {
      path: '/p3',
      name: 'P3',
      component: P3
    }
  ]
})
