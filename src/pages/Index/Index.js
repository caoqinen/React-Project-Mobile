import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Mine from "../Mine/Mine";
import Detail from "../Detail/Detail";
import ShopCar from "../ShopCar/ShopCar";
import "./Index.css";

export default class Index extends Component {
    render() {
        return (
            <div>
                {/* 路由出口 */}
                <Switch>
                    <Route path="/index/home" component={Home} />
                    <Route path="/index/detail" component={Detail} />
                    <Route path="/index/mine" component={Mine} />
                    <Route path="/index/shopcar" component={ShopCar} />
                    <Redirect to="/index/home" />
                </Switch>

                <footer>
                    <NavLink to="/index/home">首页</NavLink>
                    <NavLink to="/index/detail">分类</NavLink>
                    <NavLink to="/index/shopcar">购物车</NavLink>
                    <NavLink to="/index/mine">我的</NavLink>
                </footer>
            </div>
        )
    }
}
