import { observable, action, runInAction } from "mobx";
import { persist } from "mobx-persist";
class TestB {
  @persist
  @observable
  age = 30;

  //action函数间可以互相调用
  @action
  plus() {
    this.age += 10;
    setTimeout(() => {
      runInAction(() => {
        this.age += 30;
      });
    }, 5000);
  }
}

export default TestB;
