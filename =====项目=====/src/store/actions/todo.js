import { SAVE_TODO_ITEM, DELETE_TODO_ITEM, ASYNC_GET_TODO_LIST } from "@/store/actions/actionTypes";
const saveTodoItem = item => {
  return {
    type: SAVE_TODO_ITEM,
    item
  };
};

const deleteTodoItem = id => {
  return {
    type: DELETE_TODO_ITEM,
    id
  };
};

// const asyncGetTodoList = param => {
//   //由于使用了redux-thunk，所以return可以返回函数，在函数中进行异步fetch请求
//   return (dispatch) => {
//     setTimeout(function() {
//       //setTimeout 模拟异步请求
//       let list = [
//         { id:1, name:"react"},
//         { id:2, name:"react-redux"},
//         { id:3, name:"react-thunk"},
//       ]
//       dispatch({
//         type: ASYNC_GET_TODO_LIST,
//         list
//       });
//     }, 3000);
//   };
// };

export default { 
  saveTodoItem, 
  deleteTodoItem,
  // asyncGetTodoList
 };