import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import List from "./components/List/List";
import ShopList from "./components/ShopList/ShopList";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>首页</h1>
                <Header />
                <Banner />
                <List />
                <ShopList />
            </div>
        );
    }
}

export default Home;