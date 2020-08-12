import { reqClassifyDetail1 } from "../../util/request";

// 状态
const initState = {
    reqClassifyDetail: [],
    id1: null
}

// 用来修改状态
const changeclassifyDetailAction = (arr) => {
    return { type: "changeClassifyDetail", list: arr }
}
const changeidAction = (newid) => {
    return { type: "changeid", list: newid }
}


// 分类详情页面
export const reqClassifyDetailAction = (id) => {
    return (dispatch, getState) => {
        const { id1 } = getState().classifyDetail;
        dispatch(changeidAction(id))
        if (id1 === id) {
            return
        }
        // 发请求
        reqClassifyDetail1({ fid: id }).then(res => {
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
        case "changeid":
            return {
                ...state,
                id1: action.list
            }
        default:
            return state;
    }
}

//导出分类详情数据
export const classifyDetail = state => state.classifyDetail.classifyDetail;

export default reducer;