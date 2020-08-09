import { createStore, applyMiddleware } from "redux";
// 处理异步， 可以return函数
import thunk from "redux-thunk";
import { reqBanners, reqGoods, reqGoodsInfo, reqClassifyTree, reqClassifyDetail, reqCartList } from "../util/request";

// 初始状态
const initState = {
    banner: [],
    goods: [],
    shopDetail: {},
    classifyTree: [],
    classifyDetail: [],
    cartList: []
}


// dispatch(changeBannerAction())   轮播图
const changeBannerAction = (arr) => {
    return { type: "changeBanner", list: arr }
}
// 轮播图下的 商品列表
const changeGoodActions = (arr) => {
    return { type: "changeGoods", list: arr }
}
// 用来修改某条商品数据
const changeshopDetailAction = (arr) => {
    return { type: "changeShopDetail", list: arr }
}
// 数据树
const changeclassifyTreeAction = (arr) => {
    return { type: "changeClassifyTree", list: arr }
}
// 详情
const changeclassifyDetailAction = (arr) => {
    return { type: "changeClassifyDetail", list: arr }
}
// 用来修改购物车列表
const changeCaetListAction = arr => {
    return { type: "changeCartList", list: arr }
}

// 一进页面 发送请求  reqBannersAction
export const reqBannersAction = () => {
    // console.log(1);
    return (dispatch, getState) => {
        // 缓存层  不刷新的话如果有内容 就不发请求
        if (getState().banner.length > 0) {
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
        // console.log(getState());
        if (getState().goods.length > 0) {
            return;
        } else {
            // 发请求
            reqGoods().then(res => {
                dispatch(changeGoodActions(res.data.list[0].content))
            })
        }

    }
}
// 进页面进详情页面发请求
export const reqShopDetailsAction = (id1) => {
    return (dispatch, getState) => {
        // console.log(getState().shopDetail[0]);
        // if (getState().shopDetail.length > 0) {
        //     return;
        // } else {
        // 发请求
        reqGoodsInfo({ id: id1 }).then(res => {
            dispatch(changeshopDetailAction(res.data.list[0]))

        })
        // }

    }
}
// 分类页面数据
export const reqClassifyTreeAction = () => {
    return (dispatch, getState) => {
        // console.log(getState().classifyTree.length);
        // 缓存层 优化
        if (getState().classifyTree.length > 0) {
            return;
        } else {
            // 发请求
            reqClassifyTree().then(res => {
                dispatch(changeclassifyTreeAction(res.data.list))
            })
        }
    }
}
// 分类详情页面
export const reqClassifyDetailAction = (id) => {
    return (dispatch, getState) => {
        // 发请求
        reqClassifyDetail({ fid: id }).then(res => {
            dispatch(changeclassifyDetailAction(res.data.list))
        })


    }
}
// 购物车列表
export const reqCartListAction = () => {
    return (dispatch, getState) => {
        // 如果数据中有内容 就不在请求  （优化）
        if (getState().cartList.length > 0) {
            return;
        } else {
            // 发请求
            reqCartList({ uid: 123 }).then(res => {
                dispatch(changeCaetListAction(res.data.list))
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
        case "changeShopDetail":
            return {
                ...state,
                shopDetail: action.list
            }
        case "changeClassifyTree":
            return {
                ...state,
                classifyTree: action.list
            }
        case "changeClassifyDetail":
            return {
                ...state,
                classifyDetail: action.list
            }
        case "changeCartList":
            return {
                ...state,
                cartList: action.list
            }
        default:
            return state;
    }
}

// 导出轮播数据
export const banner = (state) => state.banner;
// 导出商品数据
export const goods = (state) => state.goods;
// 导出商品详情的数据
export const shopDetail = (state) => state.shopDetail;
// 导出分类数据
export const classifyTree = (state) => state.classifyTree;
//导出分类详情数据
export const classifyDetail = state => state.classifyDetail;
// 导出购物车列表数据
export const cartList = state => state.cartList;

// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

// 导出仓库
export default store;