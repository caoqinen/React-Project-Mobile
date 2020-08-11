import React, { Component } from 'react';
// 子组件
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import List from "./components/List/List";
import ShopList from "./components/ShopList/ShopList";
// 把该组件变成高阶组件 容器组件
import { connect } from "react-redux";
// 把仓库中导出的数据取出来
import { banner, reqBannersAction, goods, reqGoodsActions } from "../../store/modules/Home";



class Home extends Component {

    // constructor() {
    //     super();
    // }

    componentDidMount() {
        this.props.reqBanner()
        this.props.reqGoods()
        // console.log(this.props);
    }
    render() {
        const { banner, goods } = this.props;
        // 把每一张图片 加一个3000端口
        // banner.forEach((item => {
        //     item.img = this.$img + item.img
        // }))
        return (
            <div>
                <Header />
                <Banner banner={banner} />
                <List />
                <ShopList goods={goods} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        banner: banner(state),
        goods: goods(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        reqBanner: () => dispatch(reqBannersAction()),
        reqGoods: () => dispatch(reqGoodsActions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);