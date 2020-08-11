import { reqClassifyDetail } from "../../util/request";

// 状态
const initState = {
    reqClassifyDetail: []
}

// 用来修改状态
const changeclassifyDetailAction = (arr) => {
    return { type: "changeClassifyDetail", list: arr }
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


const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeClassifyDetail":
            return {
                ...state,
                classifyDetail: action.list
            }
        default:
            return state;
    }
}

//导出分类详情数据
export const classifyDetail = state => state.classifyDetail.classifyDetail;

export default reducer;