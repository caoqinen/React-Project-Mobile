import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import asyncComponent from "./util/asyncComponent";
// 路由拦截
import MyRouter from "./components/MyRouter/MyRouter";

// 懒加载
const Index = asyncComponent(() => import("./pages/Index/Index"));
const Login = asyncComponent(() => import("./pages/Login/Login"));
// const Mine = asyncComponent(() => import("./pages/Mine/Mine"));
// const Classify = asyncComponent(() => import("./pages/classify/classify"));
// const ShopCar = asyncComponent(() => import("./pages/ShopCar/ShopCar"));
const Register = asyncComponent(() => import("./pages/Register/Register"));
const ShopDetail = asyncComponent(() => import("./pages/ShopDetail/ShopDetail"));
const ClassifyDetail = asyncComponent(() => import("./pages/ClassifyDetail/ClassifyDetail"));

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <MyRouter path="/index" component={Index} />
        {/* <MyRouter path="/mine" component={Mine} /> */}
        {/* <MyRouter path="/classify" component={Classify} /> */}
        {/* <MyRouter path="/shopcar" component={ShopCar} /> */}
        <MyRouter path="/register" component={Register} />
        <MyRouter path="/shopdetail" component={ShopDetail} />
        <MyRouter path="/classifyDetail" component={ClassifyDetail} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
