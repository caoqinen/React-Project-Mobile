import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter } from "react-router-dom";
//引入重置样式
import "./assets/css/reset.css";
//引入rem
import "./assets/js/rem";
// 移动端插件
import 'antd-mobile/dist/antd-mobile.css';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);


