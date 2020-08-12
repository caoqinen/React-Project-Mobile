import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import asyncComponent from "../../util/asyncComponent";

import "./Index.css";
// 图片不亮
import homeNb from "../../assets/img/tab_home_nor.png";
import classifyNb from "../../assets/img/tab_menu_nor.png";
import shopcarNb from "../../assets/img/tab_shopping_nor.png";
import mineNb from "../../assets/img/tab_me_nor.png";
// 亮的图片
import homebg from "../../assets/img/tab_home_hig.png";
import classifybg from "../../assets/img/tab_menu_hig.png";
import shopcarbg from "../../assets/img/tab_shopping_hig.png";
import minebg from "../../assets/img/tab_me_hig.png";

// 懒加载
const Home = asyncComponent(() => import("../Home/Home"));
const Mine = asyncComponent(() => import("../Mine/Mine"));
const Classify = asyncComponent(() => import("../classify/classify"));
const ShopCar = asyncComponent(() => import("../ShopCar/ShopCar"));

export default class Index extends Component {

    render() {
        const isOk = this.props.history.location.pathname;
        return (
            <div>
                {/* 路由出口 */}
                <Switch>
                    <Route path="/index/home" component={Home} />
                    <Route path="/index/classify" component={Classify} />
                    <Route path="/index/mine" component={Mine} />
                    <Route path="/index/shopcar" component={ShopCar} />
                    <Redirect to="/index/home" />
                </Switch>

                <footer>
                    <NavLink className="a" to="/index/home">
                        <img className="home" src={'/index/home' === isOk ? homebg : homeNb} alt="" />
                        <span>首页</span>
                    </NavLink>
                    <NavLink className="a" to="/index/classify">
                        <img className="classifyNb" src={'/index/classify' === isOk ? classifybg : classifyNb} alt="" />
                        <span>分类</span>
                    </NavLink>
                    <NavLink className="a" to="/index/shopcar">
                        <img className="shopcar" src={'/index/shopcar' === isOk ? shopcarbg : shopcarNb} alt="" />
                        <span>购物车</span>
                    </NavLink>
                    <NavLink className="a" to="/index/mine">
                        <img className="mine" src={'/index/mine' === isOk ? minebg : mineNb} alt="" />
                        <span>我的</span>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
