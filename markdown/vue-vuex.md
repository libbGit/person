```
const state = {
  token: 0,
  username: "",
};

const getters = {
  isLogin: (state, getter, rootState, rootGetter) => {  
    //其中rootState, rootGetter可以访问命名空间之外的全局变量，顺序不能变。
    return state.token == "1";
  },
};

const mutations = {
  UPDATE_TOKEN(state, payload) {
    state.token = payload;
  }
};

const actions = {
  update_warn_num(store,payload) {
    let {commit,dispatch,getters,rootGetters,rootState,state} = store; //通过解构获得，顺序无所谓，但名字不能变.
    commit(“UPDATE_TOKEN”, { a: 10 });                      //访问本模块的mutation, { a: 10 }为payload
    commit(“home/UPDATE_TEST”, { a: 10 }, { root: true });          //访问全局的mutation，home/UPDATE_TEST为home模块中的UPDATE_TEST mutation，  { a: 10 }为payload
    dispatch(“update_warn_num”,{ a: 10 });                  //访问本模块的action， { a: 10 }为payload
    dispatch(“home/update_test”, { a: 10 }, {root: true});          //访问全局的action，home/update_test为home模块中的update_test action， { a: 10 }为payload
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
```
在项目中有时就会用到在一个命名模块中 访问/调用 另一个模块的state，mutation，action等，所以把使用的普遍方法总结下来，以供需要者参考。