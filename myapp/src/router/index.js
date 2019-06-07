import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     */{
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
