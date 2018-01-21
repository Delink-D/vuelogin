import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/LoginComponent'
import HomeComponent from '@/components/HomeComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/home',
      name: 'HomeComponent',
      component: HomeComponent
    }
  ]
})
