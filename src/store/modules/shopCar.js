import {
    reqCartEdit,
    reqCartList,
    reqCartDel
} from "../../util/request";

// 状态
const initState = {
    // 购物车列表
    cartList: [],
    // 编辑
    editDel: false,
    // 全选
    checkedAll: false,
    // 开关原理，
    isR: true
}

// 修改开关
export const changeIsRAction = (bool) => {
    return { type: 'isR', bool }
}

// 编辑
export const changeeditDelAction = () => {
    return { type: 'changeEdit' }
}

// 全选
export const changeeAllAction = () => {
    return { type: 'changeAll' }
}

// 用来修改购物车列表
export const changeCaetListAction = arr => {
    return { type: "changeCartList", list: arr }
}


//!================= 点击改变checked
export const changeCheckedAction = index => {
    return { type: "changeChecked", index }
}


// 购物车列表
export const reqCartListAction = (uid, del) => {
    return (dispatch, getState) => {
        // 发请求
        const { cartList } = getState().shopCar;
        var checkedArr = cartList.map(item => item.checked);
        reqCartList({ uid }).then(res => {
            const list = res.data.list ? res.data.list : []
            list.forEach((item, index) => {
                if (del) {
                    item.checked = false;
                } else {
                    item['checked'] = checkedArr[index]
                }

            })
            dispatch(changeCaetListAction(list))
        })
    }
}


// 购物车修改
export const reqCartEditAction = (obj) => {
    return (dispatch, getState) => {
        const { cartList, isR } = getState().shopCar;
        const index = cartList.findIndex((val) => val.id === obj.id);
        // 开关原理，用户点击第一次可以进入，点击第二次时候，必须要等第一次请求结束后
        if (isR) {
            // 进来后，立刻改为false，用户在请求完之前是没办法发第二次请求的
            dispatch(changeIsRAction(false))
            // 发请求
            reqCartEdit(obj).then(res => {
                // 请求完毕，默认变量改为true 用户可以执行第二次点击操作
                dispatch(changeIsRAction(true))
                if (res.data.code === 200) {
                    dispatch(reqCartListAction(cartList[index].uid))
                }
            })
        }
    }
}


// 删除
export const reqDelshop = (id, uid) => {
    return (dispatch) => {
        // 发请求
        reqCartDel({ id }).then(res => {
            dispatch(reqCartListAction(uid, true))
        })
    }
}

//!===================== 全选
export const reqAllchecked = () => {
    return (dispatch, getState) => {
        const { cartList } = getState().shopCar;
        cartList.forEach(item => {
            item.checked = !item.checked;
        })
        dispatch(changeCaetListAction(cartList))
    }
}



const reducer = (state = initState, action) => {
    const cartList = [...state.cartList];
    switch (action.type) {
        case "isR":
            return {
                ...state,
                isR: action.bool
            }
        case "changeCartList":
            return {
                ...state,
                cartList: action.list
            }
        case "changeEdit":
            return {
                ...state,
                editDel: !state.editDel
            }
        case "changeChecked":
            cartList[action.index].checked = !cartList[action.index].checked
            return {
                ...state,
                cartList,
                checkedAll: cartList.every(item => item.checked)
            }
        case "changeAll":
            return {
                ...state,
                checkedAll: !state.checkedAll,
                cartList: [...cartList.map(item => {
                    item.checked = !state.checkedAll
                    return item
                })]
            }
        default:
            return state;
    }
}


// 导出购物车列表数据
export const cartList = state => state.shopCar.cartList;

// 导出编辑
export const editDel = state => state.shopCar.editDel;

export const checkedAll = state => state.shopCar.checkedAll;

// 获取总共价格
export const getAllprice = state => {
    let num = 0;
    const { cartList } = state.shopCar;
    // console.log(cartList);
    cartList.forEach((item) => {
        if (item.checked) {
            num += item.num * item.price
        }
    })
    return num
}


export default reducer;