import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
//引入重置样式
import "./assets/css/reset.css";
//引入rem
import "./assets/js/rem";
// 移动端插件
import 'antd-mobile/dist/antd-mobile.css';

// 把图片加上3000端口
Component.prototype.$img = "http://localhost:3000";
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);


