import React, { Component } from 'react';
// 把字符串转换为对象
import querystring from "querystring";
import { connect } from "react-redux";
import { shopDetail, reqShopDetailsAction } from "../../store/index";
import { NavBar, Icon } from 'antd-mobile';
import collect from "../../assets/img/keep.png"
import "./ShopDetail.css";

class ShopDetail extends Component {
    constructor() {
        super();
        this.state = {
            isAddShop: false,
            isShow: true
        }
    }


    componentDidMount() {
        const id1 = querystring.parse(this.props.location.search.slice(1)).id;
        // console.log(id);
        this.props.reqShopDetail(id1)
    }
    // 点击退回一步
    onLeftClick() {
        this.props.history.goBack();
    }
    // 点击加入购物车
    addShopCate() {
        console.log(1);
    }
    render() {
        const { shopDetail } = this.props;
        // console.log(shopDetail.id);
        return (
            <div className="shopDetail">
                {/* 头部 */}
                <div className="head_detail">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.onLeftClick()}>详情</NavBar>
                </div>
                {/* 内容区 */}

                <div className="content">

                    <div className="first_tu">
                        <img src={shopDetail.img} alt="" />
                        <div className="txt">
                            <h3>{shopDetail.goodsname}</h3>
                            <p className="center_txt">
                                <i>￥{shopDetail.price}</i>
                                {shopDetail.ishot ? <span>热卖</span> : null}
                                {shopDetail.isnew ? <span>新品</span> : null}</p>
                            <p className="bottom">￥{shopDetail.market_price}</p>
                        </div>

                        <div className="collect">
                            <img src={collect} alt="" />
                            <p>收藏</p>
                        </div>
                    </div>
                </div>
                {/* 广告页 */}
                <div className="advertising" dangerouslySetInnerHTML={{ __html: shopDetail.description }}></div>
                {/* shopcart */}
                {
                    this.state.isAddShop ? (<div className="shopcart">
                        <span onClick={() => this.addShopCate()}>加入购物车</span>
                    </div>) : null
                }

                {/* 点击弹出 */}
                {
                    this.state.isShow ? (<div className="addCate">
                        <div className="door"></div>
                        <div className="box">
                            <div className="top">
                                <div className="left">
                                    <img src={shopDetail.img} alt="" />
                                </div>
                                <div className="right"><i>{shopDetail.goodsname}</i></div>
                            </div>
                            <h2>{shopDetail.specsname}</h2>
                            <div className="tag">{}</div>
                            <div className="addShop"><span>加入购物车</span></div>
                        </div>
                    </div>) : null
                }

            </div>


        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        shopDetail: shopDetail(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqShopDetail: (id1) => dispatch(reqShopDetailsAction(id1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail)
