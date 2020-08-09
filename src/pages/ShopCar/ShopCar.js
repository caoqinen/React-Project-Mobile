import React, { Component } from 'react';
import Head from "../../components/wufHeader/Head";
import Nodata from "./commponents/Nodata/Nodata";
import ContentShopList from "./commponents/contentShopList/contetntShopList";
import "./ShopCar.css";
import { cartList, reqCartListAction } from "../../store/index";
import { connect } from "react-redux";

class ShopCar extends Component {
    constructor() {
        super();
        this.state = {
            title: '购物车',
            data: [1]
        }
    }

    componentDidMount() {
        // console.log(this.props);
        this.props.reqCartList()
    }
    render() {
        const { title, data } = this.state;
        const { cartList } = this.props;
        if (!cartList) {
            return null;
        }
        console.log(cartList);
        return (
            <div>
                {/* 头部组件 */}
                <Head tit={title} />
                {/* 无数据时出现 */}
                {
                    // 判断请求回来的东西有值吗，有的话展示，否则展示该组件
                    data.length === 0 ? <Nodata /> : (
                        // 列表数据
                        <ContentShopList />
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
        reqCartList: () => dispatch(reqCartListAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar);