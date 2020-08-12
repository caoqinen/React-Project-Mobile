import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

export default class MyRouter extends Component {
    render() {
        const data = sessionStorage.getItem('key');

        return (
            <div>
                {
                    // 判断登录过吗，登陆过就可以跳转，否则重定向到登录页面
                    data ? <Route {...this.props} /> : <Redirect to="/login" />
                }
            </div>
        )
    }
}
