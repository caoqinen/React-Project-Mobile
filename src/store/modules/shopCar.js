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
    editDel: false
}

// 编辑
export const changeeditDelAction = () => {
    return { type: 'changeEdit' }
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
export const reqCartListAction = (uid) => {
    return (dispatch, getState) => {
        // const { cartList } = getState().shopCar;
        // if (cartList.length > 0) {
        //     return
        // }
        // 发请求
        reqCartList({ uid }).then(res => {
            const list = res.data.list ? res.data.list : []
            list.forEach((item) => {
                item['checked'] = false
            })
            // console.log(list);
            dispatch(changeCaetListAction(list))
        })
    }
}


// 购物车修改
export const reqCartEditAction = (obj) => {
    return (dispatch, getState) => {
        const { cartList } = getState().shopCar;
        const index = cartList.findIndex((val) => val.id === obj.id);
        // 发请求
        reqCartEdit(obj).then(res => {
            if (res.data.code === 200) {
                // console.log(cartList[index].uid);
                dispatch(reqCartListAction(cartList[index].uid))
            }
        })
    }
}


// 删除
export const reqDelshop = (id, uid) => {
    return (dispatch) => {
        // 发请求
        reqCartDel({ id }).then(res => {
            dispatch(reqCartListAction(uid))
        })
    }
}

//!===================== 全选
export const reqAllchecked = () => {
    return (dispatch, getState) => {
        // console.log(getState().shopCar);
        const { cartList } = getState().shopCar;
        cartList.forEach(item => {
            item.checked = !item.checked;
        })
        // console.log(list);
        dispatch(changeCaetListAction(cartList))
    }
    // return { type: "changeAll" }
}



const reducer = (state = initState, action) => {
    switch (action.type) {
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
            const cartList = [...state.cartList];
            cartList[action.index].checked = !cartList[action.index].checked
            return {
                ...state,
                cartList
            }
        default:
            return state;
    }
}


// 导出购物车列表数据
export const cartList = state => state.shopCar.cartList;

// 导出编辑
export const editDel = state => state.shopCar.editDel;

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
// console.log(this.state);


export default reducer;