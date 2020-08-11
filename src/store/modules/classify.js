import { reqClassifyTree } from "../../util/request";

// 状态
const initState = {
    classifyTree: [],
}

// 修改状态的
export const changeclassifyTreeAction = (arr) => {
    return { type: "changeClassifyTree", list: arr }
}

// 分类页面数据
export const reqClassifyTreeAction = () => {
    return (dispatch, getState) => {
        const { classifyTree } = getState().classify;
        // 缓存层 优化
        if (classifyTree.length > 0) {
            return;
        } else {
            // 发请求
            reqClassifyTree().then(res => {
                dispatch(changeclassifyTreeAction(res.data.list))
            })
        }
    }
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeClassifyTree":
            return {
                ...state,
                classifyTree: action.list
            }
        default:
            return state;
    }
}


// 导出分类数据
export const classifyTree = (state) => state.classify.classifyTree;
export default reducer; 