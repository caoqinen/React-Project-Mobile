
const initState = {
    user: sessionStorage.getItem("key") ? JSON.parse(sessionStorage.getItem("key")) : null
}

// 修改状态的action
export const changeUserAction = user => {
    return { type: 'changeUser', user }
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeUser":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export const getUser = state => state.user.user;
export default reducer;