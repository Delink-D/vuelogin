import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import LoginComponent from '@/components/LoginComponent'
import HomeComponent from '@/components/HomeComponent'
import SignupComponent from '@/components/SignupComponent'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/signup',
      name: 'SignupComponent',
      component: SignupComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'HomeComponent',
      component: HomeComponent,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next ('login')
  else if (!requiresAuth && currentUser) next ('home')
  else next ()
})

export default router 
