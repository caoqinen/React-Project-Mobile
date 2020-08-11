import React, { Component } from 'react'
import "./Mine.css"
import mine2 from "../../assets/img/mine2.png"
import mine from "../../assets/img/mine.jpg"
import mine1 from "../../assets/img/1.jpg"
import keep from "../../assets/img/keep.png"
import icon from "../../assets/img/icon_refund.png"
export default class Mine extends Component {
    render() {
        return (
            <div className="mine1">
                <div className="top">
                    <div className="line1">
                        <span className="img1">
                            <img src={mine} alt="" />
                        </span>
                        个人中心
                        <span className="img2">
                            <img src={mine2} alt="" />
                        </span>
                    </div>
                    <div className="line2">
                        <div className="img3">
                            <img src={mine1} alt="" />
                        </div>
                        <h4>小不点儿</h4>
                    </div>
                </div>
                <div className="shoucang">
                    <img src={keep} alt="" />
                    &nbsp;&nbsp;我的收藏(5)
                </div>
                <div className="order">
                    我的订单
                    <span>查看订单</span>
                </div>
                <ul className="fa">
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                </ul>
                <div className="shou">收货地址管理</div>
            </div>
        )
    }
}
