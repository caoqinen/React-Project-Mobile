import React, { Component } from 'react';
// 把字符串转换为对象
import querystring from "querystring";
import { connect } from "react-redux";
import { shopDetail, reqShopDetailsAction } from "../../store/index";
import { NavBar, Icon, Tag, Toast } from 'antd-mobile';
import collect from "../../assets/img/keep.png"
import "./ShopDetail.css";
import { reqCartAdd } from "../../util/request";

class ShopDetail extends Component {
    constructor() {
        super();
        this.state = {
            // 下面加入购物车消失
            isAddShop: true,
            // 弹出门板
            isShow: false,
            // 存储规格数组
            shopArr: []
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
        this.setState({
            // 下面加入购物车消失
            isAddShop: !this.state.isAddShop,
            // 弹出门板
            isShow: !this.state.isShow
        })
    }


    close() {
        this.setState({
            // 下面加入购物车消失
            isAddShop: !this.state.isAddShop,
            // 弹出门板
            isShow: !this.state.isShow
        })
    }

    onChange(selected, item) {
        if (selected) {
            this.state.shopArr.push(item)
            this.setState({
                ...this.state,
                shopArr: this.state.shopArr
            })

        } else {

            let index = this.state.shopArr.findIndex((value) => value === item)
            this.state.shopArr.splice(index, 1)

            this.setState({
                ...this.state,
                shopArr: this.state.shopArr
            })

        }

    }

    successToast(ok) {
        Toast.success(ok, 1);
    }
    // 点击加入购物车
    addShopCar() {

        const uid = JSON.parse(sessionStorage.getItem('key')).uid;
        const shopId = this.props.shopDetail.id;
        const obj = {
            uid,
            goodsid: shopId,
            num: 1
        }
        reqCartAdd(obj).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    // 下面加入购物车消失
                    isAddShop: !this.state.isAddShop,
                    // 弹出门板
                    isShow: !this.state.isShow
                })
                this.successToast(res.data.msg)
            } else {
                Toast.offline(res.data.msg, 1);
            }
        })
    }

    render() {
        const { shopDetail } = this.props;
        const { isAddShop, isShow } = this.state;
        // console.log(shopArr);
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
                    isAddShop ? (<div className="shopcart">
                        <span onClick={() => this.addShopCate()}>加入购物车</span>
                    </div>) : null
                }

                {/* 点击弹出 */}
                {
                    isShow ? (<div className="addCate">
                        {/* 半透明门板 */}
                        <div className="door" onClick={() => this.close()}></div>
                        {/* 下面弹出的白框 */}
                        <div className="box_shop">
                            <div className="top">
                                <div className="left">
                                    <img src={shopDetail.img} alt="" />
                                </div>
                                <div className="right"><i>{shopDetail.goodsname}</i></div>
                            </div>
                            <h2 className="h2">{shopDetail.specsname}</h2>
                            <div className="tag">
                                {
                                    shopDetail.specsattr ? JSON.parse(shopDetail.specsattr).map((item) => {
                                        return (
                                            <Tag onChange={(selected) => this.onChange(selected, item)} key={item}>{item}</Tag>
                                        )
                                    }) : null
                                }
                            </div>
                            <div className="addShop" onClick={() => this.addShopCar()}><span>加入购物车</span></div>
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
        reqShopDetail: (id1) => dispatch(reqShopDetailsAction(id1)),
        // reqCartAdd: (obj) => dispatch(reqCartAddAction(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail)
