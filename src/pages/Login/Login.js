import React, { Component } from 'react';
import "./Login.css";
import { Button, Toast } from 'antd-mobile';
import { reqLogin } from "../../util/request";
import { connect } from "react-redux";
import { changeUserAction } from "../../store/modules/user";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }



    toRegister() {
        this.props.history.push("/Register")
    }

    successToast(ok) {
        Toast.success(ok, 2, () => this.onClose());
    }

    onClose() {
        this.props.history.push('/index/home')
    }
    onClose1() {
        this.setState({
            user: {
                phone: "",
                password: ""
            }
        })
    }
    offline(fail) {
        Toast.offline(fail, 2, () => this.onClose1());
    }

    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }

    sub() {
        reqLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                this.successToast(res.data.msg + '正在跳转首页...');
                this.props.changeUser(res.data.list)
                sessionStorage.setItem('key', JSON.stringify(res.data.list));
            } else {
                this.offline('账号或密码错误');
            }
        })
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <div className="header">
                    <span>登录</span>
                    <span className="sp" onClick={() => this.toRegister()}>注册</span>
                </div>

                <div className="inp">
                    <div><i>账号：</i><input type="text" value={user.phone} onChange={(e) => this.changeUser(e, 'phone')} /></div>
                    <div><i>密码：</i><input type="password" value={user.password} onChange={(e) => this.changeUser(e, 'password')} /></div>

                    <p><span className="forget">忘记密码</span></p>
                    <Button type="primary" onClick={() => this.sub()}>登录</Button>
                </div>

            </div>
        );
    }
}


const mapState = state => { return {} }
const mapDispatch = dispatch => {
    return {
        changeUser: (user) => dispatch(changeUserAction(user))
    }
}
export default connect(mapState, mapDispatch)(Login);