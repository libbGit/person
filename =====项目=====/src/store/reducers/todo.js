import { SAVE_TODO_ITEM, DELETE_TODO_ITEM, ASYNC_GET_TODO_LIST } from "@/store/actions/actionTypes";
import _ from "lodash";

let defaultState = {
  list: [{
    id:1, name:"我是第一个"
  }]
};

const homeInfo = (state = defaultState, action = {}) => {
  let list = _.cloneDeep(state.list);
  switch (action.type) {
    case SAVE_TODO_ITEM:
      list = [...list, action.item];
      return {
        ...state,
        list
      };
    case DELETE_TODO_ITEM:
      list = list.filter(item => item.id != action.id);
      return {
        ...state,
        list
      };
    case ASYNC_GET_TODO_LIST:
      return { ...state, list: action.list };
    default:
      return state;
  }
};
// 用户消息
export default homeInfo;
