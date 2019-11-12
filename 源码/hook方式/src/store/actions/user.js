import {
  SAVE_USER_INFO,
  SAVE_LOGIN_INFO,
  GET_USER_INFO,
  ASYNC_SAVE_USER_INFO,
  SAVE_CAMPAIGN_AD_POS
} from "@/store/actions/actionTypes";

const saveUserInfo = value => {
  return {
    type: SAVE_USER_INFO,
    value
  };
};

const saveLoginInfo = value => {
  return {
    type: SAVE_LOGIN_INFO,
    value
  };
};

const addCampaginAdPos = value => {
  return {
    type: SAVE_CAMPAIGN_AD_POS,
    value
  };
};

// 修改用户信息
const getUserInfo = () => {
  return {
    type: GET_USER_INFO
  };
};

const asyncSaveUserInfo = value => {
  //由于使用了redux-thunk，所以return可以返回函数，在函数中进行异步fetch请求
  return (dispatch, getState) => {
    // store有三个函数:
    // 1、getState()    返回应用当前的 state 树。
    // 2、dispatch(action)  分发 action。这是触发 state 变化的惟一途径。
    // 3、subscribe(listener) 每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化，监听state的变化
    setTimeout(function() {
      //setTimeout 模拟异步
      dispatch({
        type: ASYNC_SAVE_USER_INFO,
        value
      });
    }, 2000);
  };
};

export default { saveUserInfo, getUserInfo, asyncSaveUserInfo, addCampaginAdPos };
