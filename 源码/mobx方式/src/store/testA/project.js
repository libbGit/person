import { observable, computed, action, runInAction } from "mobx";
import { persist } from "mobx-persist";

//子模块的定义和其他mobx一模一样
class Project {
  @persist
  @observable
  projectId = "11";

  @computed
  get getProjectId() {
    //不能少get
    return this.projectId + 10;
  }

  //action函数间可以互相调用
  @action
  setProjectId() {
    setTimeout(() => {
      runInAction(() => {
        this.projectId += "888";
      });
    }, 100);
  }
}

export default Project;
