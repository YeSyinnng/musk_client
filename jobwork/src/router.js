import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import News from '@/pages/news/index'
import Project from '@/pages/project/index'
import Talk from '@/pages/Talk/index'
import Register from '@/pages/login_regist/regist'
import Login from '@/pages/login_regist/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/News',
      name: 'News',
      component: News
    },{
      path: '/Project',
      name: 'Project',
      component: Project
    },{
      path: '/Talk',
      name: 'Talk',
      component: Talk
    },{
      path: '/register',
      name: 'register',
      component:Register
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
