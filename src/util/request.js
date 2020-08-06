import axios from "axios";
import qs from "qs";


// 响应拦截
axios.interceptors.response.use(res => {
    console.group();
    console.log(res);
    console.groupEnd();
    return res;
});


// 登录
export const reqLogin = (data => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(data)
    })
})

// 注册
export const reqRegister = (data => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(data)
    })
})