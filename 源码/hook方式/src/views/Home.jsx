import React, { useContext, useCallback, useEffect } from "react";
import { StoreContext, useMappedState, useDispatch } from "redux-react-hook";
import { SAVE_HOME_INFO } from "../store/actions/actionTypes";

function Home() {
  //1 获取整个store, 不过在使用 useMappedState之后，已经用不到store了
  // const store = useContext(StoreContext);

  //2 获取整个store中的 Home  模块 homeState {:name:"home"}}, 当整个store变化后，会自从监测到，并再次执行useMappedState
  const homeState = useMappedState(useCallback(state => state.Home));

  //3 获取操作action的dispatch
  const dispatch = useDispatch();

  //4 定义事件执行action
  const handleAddClick = useCallback(() => {
    dispatch({ type: SAVE_HOME_INFO, value: { name: homeState.name + "111" } });
  });

  return (
    <div>
      <div onClick={handleAddClick}>click me</div>
      <div>{homeState.name}</div>
    </div>
  );
}

export default Home;
