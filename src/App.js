import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
// import asyncComponent from "./util/asyncComponent";

import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Mine from "./pages/Mine/Mine";
import Classify from "./pages/classify/classify";
import ShopCar from "./pages/ShopCar/ShopCar";
import Register from "./pages/Register/Register";
import ShopDetail from "./pages/ShopDetail/ShopDetail";

// const Index = asyncComponent(() => import("./pages/Index/Index"));

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
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
