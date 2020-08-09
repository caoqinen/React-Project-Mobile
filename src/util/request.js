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

// 获取轮播图信息
export const reqBanners = (params) => axios({
    url: "/api/getbanner",
    method: "get",
    params
})

// 获取限时秒杀信息
export const reqSeckill = (params) => axios({
    url: "/api/getseckill",
    method: "get",
    params
})

// 获取商品列表信息
export const reqGoods = (params) => axios({
    url: "/api/getindexgoods",
    method: "get",
    params
})


// 通过id获取具体的某条信息
export const reqGoodsInfo = (params) => axios({
    url: "/api/getgoodsinfo",
    method: "get",
    params
})

// 获取分类商品
export const reqClassifyTree = (params) => axios({
    url: "/api/getcatetree",
    method: "get",
    params
})

// 获取分类中某一条的商品信息
export const reqClassifyDetail = (params) => axios({
    url: "/api/getgoods",
    method: "get",
    params
})

// 购物车列表
export const reqCartList = (params) => axios({
    url: "/api/cartlist",
    method: "get",
    params
})