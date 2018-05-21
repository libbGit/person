import Cookies from 'js-cookie'

import fetch from '@/services/fetch'

const state = {
  token: 0,
  advertiser:'',
  advertiser_name:'',
  site_type: [],
  role: '',
  username: ''
}
const getters = {
  isLogin : state => {
    return state.token == 1
  }
}
const mutations = {
  UPDATE_TOKEN ( state, value) {
    state.token = value
  },
  UPDATE_ADVERTISER ( state, value ){
    state.advertiser = value
  },
  UPDATE_ADVERTISER_NAME ( state, value ){
    state.advertiser_name = value
  },
  UPDATE_SITE_TYPE ( state, value ){
    state.site_type = value
  },
  UPDATE_ROLE ( state, value ){
    state.role = value
  },
  UPDATE_USERNAME ( state, value ){
    state.username = value
  }
}
const actions = {
  login ( {commit}, data) {
    return new Promise( (resolve, reject) => {
      fetch.post('/user/login', data)
        .then( res => {
          if(res.ret == 0) {
            let data = res.data
            commit('UPDATE_TOKEN', 1)
            commit('UPDATE_ADVERTISER', data.advertiser)
            commit('UPDATE_ADVERTISER_NAME', data.advertiser_name)
            commit('UPDATE_SITE_TYPE', data.site_type)
            commit('UPDATE_ROLE', data.role)
            commit('UPDATE_USERNAME', data.username)
            resolve()
          }
          else {
            reject(new Error(res.msg))
          }
        })
        .catch( err => {
          reject(err)
        })
    })
  },
  logout ( {commit, dispatch}, data ){
    return new Promise ( (resolve, reject) => {
      fetch.get('/user/logout')
        .then( res => {
          dispatch('remove_login_info')
          resolve()
        })
        .catch( err => {
          reject(err)
        })
    })
  },
  remove_login_info( {commit} ){
    commit('UPDATE_TOKEN', 0)
    commit('UPDATE_ADVERTISER', "")
    commit('UPDATE_ADVERTISER_NAME', "")
    commit('UPDATE_SITE_TYPE', [])
    commit('UPDATE_ROLE', "")
    commit('UPDATE_USERNAME', "")
    Cookies.remove('PHPSESSID')
    return Promise.resolve()
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
