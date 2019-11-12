import { SAVE_HOME_INFO, ASYNC_SAVE_HOME_INFO, GET_HOME_INFO } from "../actions/actionTypes";

let defaultState = {
  name: "home"
};

const homeInfo = (state = defaultState, action = {}) => {
  return (reducerTarget[action.type] && reducerTarget[action.type](state, action)) || state;
};

const reducerTarget = {
  [SAVE_HOME_INFO]: (state, action) => {
      console.log("SAVE_HOME_INFO", {
        ...state,
        ...action.value
      },state, action);
    
    return {
      ...state,
      ...action.value
    };
  },
  [ASYNC_SAVE_HOME_INFO]: (state, action) => {
    return {
      ...state,
      ...action.value
    };
  },
  [GET_HOME_INFO]: (state, action) => {
    return { ...state };
  }
};

// 用户消息
export default homeInfo;
