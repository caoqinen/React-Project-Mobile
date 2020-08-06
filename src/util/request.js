import axios from "axios";
import qs from "qs";


// 响应拦截
axios.interceptors.response.use(res => {
    console.group();
    console.log(res);
    console.groupEnd();
    return res;
});