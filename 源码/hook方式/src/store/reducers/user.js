import { UPDATE_USER_INFO } from "../actions/actionTypes";

let defaultState = {
  islogIn: true,
  username: "admin",
  password: "25f9e794323b453885f5181f1b624d0b"
};

const reducer = (state = defaultState, action = {}) => {
  return (
    (reducerTarget[action.type] && reducerTarget[action.type](state, action)) ||
    state
  );
};

const reducerTarget = {
  [UPDATE_USER_INFO]: (state, action) => {
    return {
      ...state,
      ...action.value
    };
  }
};

// 用户消息
export default reducer;
