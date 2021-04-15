import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import World from '@/components/World'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/world',
      name: 'World',
      component: World
    },
    {
      path: '/',
      name: HelloWorld,
      component: HelloWorld
    }
  ]
})
