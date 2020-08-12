import { createStore, applyMiddleware, combineReducers } from "redux";
// 处理异步， 可以return函数
import thunk from "redux-thunk";
import Home from "./modules/Home";
import shopDetail from "./modules/shopDetail";
import classify from "./modules/classify";
import classifyDetail from "./modules/classifyDetail";
import shopCar from "./modules/shopCar";
import user from "./modules/user";

const reducer = combineReducers({
    Home,
    shopDetail,
    classify,
    classifyDetail,
    shopCar,
    user
})
// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

// 导出仓库
export default store;