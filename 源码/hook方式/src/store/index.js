import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage/index"; // defaults to localStorage for web and AsyncStorage for react-native
import reducers from "./reducers/index";
import thunk from "redux-thunk";

//持久化key
const config = { key: "root", storage };
let persistedReducer = persistCombineReducers(config, reducers); //将redux持久化，并将多个reducer combine起来

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //配置redux devtools

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export default { store, persistor };
