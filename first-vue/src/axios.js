import axios from "axios";

//前置拦截
axios.interceptors.request.use(config => {

    return config
})


//后置拦截
axios.interceptors.response.use(response => {
    // let res = response.data;
    // console.console.log("#############");
    // console.console.log("res");
    // console.console.log("#############");
})