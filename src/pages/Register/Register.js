import React, { Component } from 'react';
import "./Register.css";
import { NavBar, Button, Toast, Icon } from 'antd-mobile';
import { reqRegister } from "../../util/request";


export default class Register extends Component {

    constructor() {
        super();

        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        }
    }


    changeUser(e, key) {
        // console.log(e, key);
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }


    successToast(ok) {
        Toast.success(ok, 2, () => this.onClose());
    }

    failToast(failing) {
        Toast.fail(failing, 2, () => this.onClose1());
    }

    // 成功跳转登录
    onClose() {
        this.props.history.push('/login');
    }
    // 失败清空输入框内容
    onClose1() {
        this.setState({
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        })
    }


    Register() {
        reqRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                this.successToast(res.data.msg + '正在跳转登录...');
            } else {
                this.failToast(res.data.msg);
            }
        })

    }

    onLeftClick() {
        // console.log(this.props);
        this.props.history.goBack();

    }
    render() {
        const { user } = this.state;
        return (
            <div className="bg">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.onLeftClick()}>注册</NavBar>

                <div className="inp">
                    <div><i>账号：</i><input type="text" onChange={(e) => this.changeUser(e, 'phone')} value={user.phone} /></div>
                    <div><i>昵称：</i><input type="text" onChange={(e) => this.changeUser(e, 'nickname')} value={user.nickname} /></div>
                    <div><i>密码：</i><input type="password" onChange={(e) => this.changeUser(e, 'password')} value={user.password} /></div>

                    <Button type="primary" onClick={() => this.Register()}>注册</Button>
                </div>
            </div>
        )
    }
}
