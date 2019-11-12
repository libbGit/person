// import User from "./user";
import Home from "./home";
import User from "./user";

//对reducer的模块进行拆分
export default {  Home, User };
//和这种事一样的 export default combineReducers({User,Home})  


//此处的名称  为在
// connect(
// state => ({
//   userInfo: state.User //将state中的User作为属性传入
// }),
