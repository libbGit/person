import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '@/router'
import store from '@/store'

let paramsSerializer = function (params) {
  let parts = [];
  for (let key in params) {
    let val = params[key]
    if (val === null || typeof val === 'undefined') {
      continue;
    }
    if (Array.isArray(val)) {
      val = JSON.stringify(val)
    }
    parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
  }
  let result = parts.join('&');
  return result
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let instance = axios.create({
  baseURL: '/api',
  // timeout: 600000,
  timeout: 30000,
  paramsSerializer: function (params) {
    return paramsSerializer(params)
  }
});
let paramPost = function (data) {
  var params = new URLSearchParams();
  for (let name in data) {
    params.append(name, data[name]);
  }
  return params
}
// 登录过期处理
let is_show_login_missing = false;

instance.interceptors.response.use(res => {
  let result = res.data;
  if ( result.ret == -1  && !is_show_login_missing) {
    is_show_login_missing = true
    MessageBox({
      title: '提示',
      message: '登录信息过期',
      confirmButtonText: '确定',
      callback: action => {
        store.dispatch('user/remove_login_info')
          .then( ()=> {
            is_show_login_missing = false
            router.push('/login')
          })
      }
    })
  }
  return result;
})
export default instance
