/*
 * 用户登录
 */
import store from '@/store'

import Login from '@/views/login'

let isLogin = () => {
  return store.getters['user/isLogin']
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '用户登录',
    }
    // beforeEnter: (to, from, next) => {
    //   // let redirect = to.query.redirect
    //   // if (isLogin() && redirect) {
    //   //   next(redirect)
    //   // } else if ( isLogin() ) {
    //   //   next("/choose")
    //   // } else {
    //   //   next()
    //   // }
    // }
  }, {
    path: '/logout',
    beforeEnter(to, from, next) {
      // store.dispatch('user/logout')
      //   .then(res => {
      //     next('/login')
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }]

export default routes
