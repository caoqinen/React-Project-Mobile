import { reqGoodsInfo } from "../../util/request";

// 状态
const initState = {
    shopDetail: {},
}

// 用来修改状态
const changeshopDetailAction = (arr) => {
    return { type: "changeShopDetail", list: arr }
}

// 进页面进详情页面发请求
export const reqShopDetailsAction = (id1) => {
    return (dispatch, getState) => {
        const { shopDetail } = getState().shopDetail;
        // 缓存层（优化）
        if (JSON.stringify(shopDetail) === '{}') {
            if (shopDetail.id === Number(id1)) {
                return;
            }
        }
        if (shopDetail.id === Number(id1)) {
            return;
        }
        reqGoodsInfo({ id: id1 }).then(res => {
            dispatch(changeshopDetailAction(res.data.list[0]))
        })
    }
}


//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeShopDetail":
            return {
                ...state,
                shopDetail: action.list
            }
        default:
            return state;
    }
}

// 导出商品详情的数据
export const shopDetail = (state) => state.shopDetail.shopDetail;

export default reducer;