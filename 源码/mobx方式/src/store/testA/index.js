import { observable, computed, action, runInAction } from "mobx";
import { persist } from "mobx-persist";
import Project from "./project";

//定义子模块
class TestA {
  // constructor(rootStore) {
  //   //由于在执行 @persist("object", TestA)时， 又会执行一次 constructor，导致rootStore中为null，所以如果发现为空，不让执行赋值，？？？？不知道为啥会为null
  //   if (rootStore) {
  //     this.rootStore = rootStore;
  //   }
  //   //由于在父store中实例化时，传入了this，所以rootStore代表父store的状态。它不需要observable，因为不需要在子store的界面上体现。
  //   //rootStore只是用来 和 父 store进行通信。
  // }
  //子模块
  @persist("object", Project)
  @observable
  project = new Project(); //定义一个对象，引入子模块。persist的类型设置为子模块的class

  @persist
  @observable
  name = "hello";

  getCurrentRoute() {
    return this.rootStore.currentRoute;
  }

  @computed
  get getNum10() {
    //不能少get
    return this.name + 10;
  }

  //action函数间可以互相调用
  @action
  plus() {
    this.name += "world";
    setTimeout(() => {
      runInAction(() => {
        this.name += "! man";
      });
    }, 5000);
  }

  @action
  minus() {
    // this.name--;
  }
}

export default TestA;
