import React, { Component } from 'react';
import querystring from "querystring";
import { NavBar, Icon } from 'antd-mobile';
import "./ClassifyDetail.css";
import { connect } from "react-redux";
import { classifyDetail, reqClassifyDetailAction } from '../../store';

class ClassifyDetail extends Component {

    constructor() {
        super()
        this.state = {
            title: null
        }
    }

    componentDidMount() {
        //!    原生方法
        const search = this.props.location.search.slice(1);
        // // console.log(search);
        // const arr = search.split("&");
        // const obj = {};
        // arr.forEach(element => {
        //     let aa = element.split("=");
        //     obj[aa[0]] = aa[1]
        // });
        // console.log(obj);
        //!    第二种方法

        const obj = querystring.parse(search);
        this.props.reqClassDetail(obj.id)
        // console.log(obj.name);

        this.setState({
            title: obj.name
        })
    }

    // 点击退回一步
    onLeftClick() {
        this.props.history.goBack();
    }
    render() {
        const { classifyDetail } = this.props;
        const { title } = this.state;

        // 如果是空返回一个空div 如果有才打印
        if (!title) {
            return null
        }
        // console.log(title);
        if (classifyDetail.length < 1) {
            return <div></div>
        }
        console.log(classifyDetail);
        return (
            <div className="ClassifyDetail">
                {/* 头部 */}
                <div className="head_detail">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.onLeftClick()}>{title}</NavBar>
                </div>

                {/* 主要内容 */}
                {
                    classifyDetail.map((item) => {
                        return (
                            <div key={item.id} className="classDetail">
                                <div className="left">
                                    <img className="pic" src={item.img} alt="" />
                                </div>
                                <div className="right">
                                    <h3 className="tit">{item.goodsname}</h3>
                                    <p className="price">￥{item.price}</p>
                                    <div className="btn">立即抢购</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        classifyDetail: classifyDetail(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqClassDetail: (id) => dispatch(reqClassifyDetailAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassifyDetail)
