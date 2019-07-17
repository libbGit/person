import { observable, computed, action, runInAction, configure } from "mobx";
import { persist, create } from "mobx-persist";
import TestA from "./testA/index";
import TestB from "./testB/index";

// 不允许在动作之外进行状态修改, 也就是如果在action中使用了异步函数，那么回调中如果要修改状态，则必须将回调定义为action或者在末尾使用runInAction
configure({ enforceActions: "observed" });

//persist对着三种要明确指定 object，list，map， 如 @persist("map")，且只需要persist  observable类型即可
class Store {
  /*****************子模块 start**************** */
  //子模块testA
  @persist("object", TestA)
  @observable
  testA = new TestA(this); //定义一个对象，引入子模块。persist的类型设置为子模块的class。在constructor中实例化

  //子模块testB
  @persist("object", TestB)
  @observable
  testB = new TestB(this);
  /*****************子模块 end**************** */

  @persist
  @observable
  currentRoute = "321312"; //全局性的state

  @persist
  @observable
  username = "helo"; //全局性的state

  //全局性的computed
  @computed
  get getCurrentRoute() {
    //不能少get
    return this.currentRoute + 10;
  }

  //全局性的action
  @action
  setUserName() {
    runInAction(() => {
      this.username += "! man";
    });
  }
}

let store = new Store();

//持久化
const hydrate = create({
  storage: localStorage, // or AsyncStorage in react-native.
  jsonify: true
});

hydrate("store", store).then(() => console.log());

export default store;

/**
 * 在store的存储结构中，应该至少有一个 是UI的store，和多个功能行的store(大的功能如界面上顶部每个菜单)
 *
 * 在同一个组件中，可以通过@inject注入多个 不同模块的 store
 *
 */
