import React, { Component } from 'react';
import Head from "../../components/wufHeader/Head";
import Nodata from "./commponents/Nodata/Nodata";
import ContentShopList from "./commponents/contentShopList/contetntShopList";
import "./ShopCar.css";
import { cartList, reqCartListAction } from "../../store/modules/shopCar";
import { connect } from "react-redux";

class ShopCar extends Component {
    constructor() {
        super();
        this.state = {
            title: '购物车',
        }
    }

    componentDidMount() {
        // console.log(this.props);
        // 从账号中取uid
        const userData = sessionStorage.getItem('key');
        const uid = JSON.parse(userData).uid;
        this.props.reqCartList(uid)
    }
    render() {
        const { title, data } = this.state;
        const { cartList } = this.props;
        if (cartList.length === 0) {
            return <div><Head tit={title} /><Nodata /></div>;
        }
        return (
            <div>
                {/* 头部组件 */}
                <Head tit={title} />
                {/* 无数据时出现 */}
                {
                    // 判断请求回来的东西有值吗，有的话展示，否则展示该组件
                    cartList.length === 0 ? <Nodata /> : (
                        // 列表数据
                        <ContentShopList cartList={cartList} />
                    )
                }

            </div>
        );
    }
}
const mapStateToProps = state => {
    // console.log(state);
    return {
        cartList: cartList(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reqCartList: (uid) => dispatch(reqCartListAction(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar);