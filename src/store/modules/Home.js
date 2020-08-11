import { reqBanners, reqGoods } from "../../util/request";

// 状态
const initState = {
    banner: [],
    goods: []
}

// 修改状态中的信息
// dispatch(changeBannerAction())   轮播图
export const changeBannerAction = (arr) => {
    return { type: "changeBanner", list: arr }
}
// 轮播图下的 商品列表
export const changeGoodActions = (arr) => {
    return { type: "changeGoods", list: arr }
}

// 页面发送请求  得到信息
// 一进页面 发送请求  reqBannersAction
export const reqBannersAction = () => {
    // console.log(1);
    return (dispatch, getState) => {
        const { banner } = getState().Home;
        // console.log(banner);
        // 缓存层  不刷新的话如果有内容 就不发请求
        if (banner.length > 0) {
            return;
        } else {
            // 发请求
            reqBanners().then(res => {
                dispatch(changeBannerAction(res.data.list))
            })
        }

    }
}
// 一进页面 发送请求
export const reqGoodsActions = () => {
    return (dispatch, getState) => {
        const { goods } = getState().Home;
        if (goods.length > 0) {
            return;
        } else {
            // 发请求
            reqGoods().then(res => {
                dispatch(changeGoodActions(res.data.list[0].content))
            })
        }
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeBanner":
            return {
                ...state,
                banner: action.list
            }
        case "changeGoods":
            return {
                ...state,
                goods: action.list
            }
        default:
            return state;
    }
}


// 导出轮播数据
export const banner = (state) => state.Home.banner;
// 导出商品数据
export const goods = (state) => state.Home.goods;

export default reducer;
