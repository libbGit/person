
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //配置redux devtools

let store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))   //中间件
)

export default store
