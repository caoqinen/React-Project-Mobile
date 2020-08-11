import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import asyncComponent from "./util/asyncComponent";


const Index = asyncComponent(() => import("./pages/Index/Index"));
const Login = asyncComponent(() => import("./pages/Login/Login"));
const Mine = asyncComponent(() => import("./pages/Mine/Mine"));
const Classify = asyncComponent(() => import("./pages/classify/classify"));
const ShopCar = asyncComponent(() => import("./pages/ShopCar/ShopCar"));
const Register = asyncComponent(() => import("./pages/Register/Register"));
const ShopDetail = asyncComponent(() => import("./pages/ShopDetail/ShopDetail"));
const ClassifyDetail = asyncComponent(() => import("./pages/ClassifyDetail/ClassifyDetail"));

function App() {
  return (
    <div>
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/mine" component={Mine} />
        <Route path="/classify" component={Classify} />
        <Route path="/shopcar" component={ShopCar} />
        <Route path="/register" component={Register} />
        <Route path="/shopdetail" component={ShopDetail} />
        <Route path="/classifyDetail" component={ClassifyDetail} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
