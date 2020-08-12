import React, { Component } from 'react';
import "./contentShopList.css";
import { Modal, Toast } from 'antd-mobile';
import small_store_img from "../../../../assets/img/store.png";
// 勾选框
import radio_nor from "../../../../assets/img/radio_nor.png";
import radio_hig from "../../../../assets/img/radio_hig.png";
// 编辑
import editor_nor from "../../../../assets/img/editor_nor.png";
import editor_hig from "../../../../assets/img/editor_hig.png";
import {
    reqCartEditAction,
    cartList,
    changeCheckedAction,
    reqAllchecked,
    editDel,
    changeeditDelAction,
    reqDelshop,
    getAllprice
} from "../../../../store/modules/shopCar";
import { connect } from "react-redux";
const alert = Modal.alert;
class contentShopList extends Component {
    constructor() {
        super();
        this.state = {
            add: '1'
        }
    }

    // 商品减
    minus(id, type, i) {
        const obj = {
            id,
            type
        }
        // 判断如果商品是一个就不能在减少了
        // const index = this.props.cartList.findIndex((val) => val.id === id);
        if (this.props.cartList[i].num <= 1) {
            this.successToast('不能再少了哦~')
        } else {
            this.props.reqCartEdit(obj)
        }
    }
    // 商品加
    add(id, type) {
        const obj = {
            id,
            type
        }
        this.props.reqCartEdit(obj)
    }

    successToast(ok) {
        Toast.success(ok, 1);
    }

    // 点击对勾
    addChecked(i) {
        this.props.changeChecked(i);
    }
    // 全选
    allChecked() {

        this.props.reqAllchecked1()
        this.setState({})
    }

    // 编辑
    editDel() {
        // console.log(1);
        this.props.changeeditDel()
    }

    reqDelshopf(id) {
        alert('删除', '确定要删除吗???', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            {
                text: 'Ok', onPress: () => {
                    this.props.reqDelshop(id, JSON.parse(sessionStorage.getItem('key')).uid)
                }
            },
        ])
        // 点击删除


    }
    render() {
        const { cartList, editDel, getAllprice } = this.props;
        return (
            <div className="contentShopList">
                {
                    cartList.map((item, index) => {
                        return (
                            // {/* 一条数据的布局，一会根据数据数量渲染 */ }
                            < div key={item.id} className="onceData" >
                                {/*顶部 */}
                                < div className="top_shop_store" >
                                    <img src={small_store_img} alt="" />
                                    <span>杭州保税区仓</span>
                                </div>
                                {/* 图片这一类的  一会浮动*/}
                                <div className={editDel ? 'center_shop active_moveleft' : 'center_shop'}>
                                    {/* 商品勾选框  */}
                                    <div className="checkbox">
                                        {
                                            item.checked ? <img onClick={() => this.addChecked(index)} src={radio_hig} alt="" /> :
                                                <img onClick={() => this.addChecked(index)} src={radio_nor} alt="" />
                                        }
                                    </div>
                                    {/* 商品图片 */}
                                    <div className="shop_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    {/* 添加这一类的 */}
                                    <div className="shop_info">
                                        {/* 商品名字 */}
                                        <h3>{item.goodsname}</h3>
                                        {/* 商品添加或减少 */}
                                        <div className="add_shop">
                                            <span onClick={() => { this.minus(item.id, 1, index) }}>-</span>
                                            {/* 动态数据 */}
                                            <span>{item.num}</span>
                                            <span onClick={() => { this.add(item.id, 2) }}>+</span>
                                        </div>
                                        {/* 商品总价 */}
                                        <div className="shop_total">
                                            {/* 动态数据 */}
                                            总价：{item.price * item.num}
                                        </div>
                                    </div>
                                    {/* 商品单价 */}
                                    <div className="shop_unit">￥{item.price}</div>
                                    {/* delBtn */}
                                    <div className="delbtn" onClick={() => this.reqDelshopf(item.id)}>删除</div>
                                </div>

                            </div >
                        )
                    })
                }
                {/* <WhiteSpace size="lg" /> */}
                {/* 下面结算 */}
                <div className="shop_footer">
                    <div className="quanxuan">
                        {
                            <img src={cartList.every((item) => item.checked) ? radio_hig : radio_nor} alt="" />
                        }
                        <p onClick={() => this.allChecked()}>全选</p>
                    </div>
                    <div className="edit" onClick={() => this.editDel()}>
                        <img src={editDel ? editor_hig : editor_nor} alt="" />
                        <p>编辑</p>
                    </div>
                    <div className="heji">
                        <p className="heji_p1">合计:{getAllprice}</p>
                        <p className="heji_p2">(不含运费)</p>
                    </div>
                    <div className="pay"><span>去结算</span></div>
                </div>

            </div >
        )
    }
}
const mapStateToProps = state => {
    // console.log(state);
    return {
        cartList: cartList(state),
        // 编辑
        editDel: editDel(state),
        getAllprice: getAllprice(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reqCartEdit: (obj) => dispatch(reqCartEditAction(obj)),
        changeChecked: (index) => dispatch(changeCheckedAction(index)),
        reqAllchecked1: () => dispatch(reqAllchecked()),
        changeeditDel: () => dispatch(changeeditDelAction()),
        reqDelshop: (id, uid) => dispatch(reqDelshop(id, uid))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(contentShopList)

