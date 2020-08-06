import React, { Component } from 'react';
import "./Register.css";
import GoBack from "../../components/GoBack/GoBack";
import { InputItem, Button, Toast } from 'antd-mobile';
import { reqRegister } from "../../util/request"

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


    successToast() {
        Toast.success('Load success !!!', 1);
    }


    Register() {
        reqRegister(this.state.user).then(res => {
            // if (res.data.isok) {
            //     this.successToast()
            // }
        })

    }
    render() {
        const { user } = this.state;
        return (
            <div className="bg">
                <div className="header">
                    <span>注册</span>
                </div>

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
