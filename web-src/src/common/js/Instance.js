import axios from "axios";
import store from "redux/store/store";

let ip;
let token;

// application/json
const Instance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
});

/*
    REST CONNECTION 시 Request 를 가로채서
    request.headers 를 셋팅한다.
    
    Jobara-Src = : 0.0.0.0
    Jobara-Token = JEJUJOBARA xxxxxxxxxxxxxxx

*/
// TODO: 중복소스 처리
Instance.interceptors.request.use(
    (config) => {
        ip = store.getState().ipInfo.ipInfo;
        token = store.getState().userInfo.userToken;

        config.headers["Jobara-Src"] = ip ? ip : "";
        config.headers["Jobara-Token"] = token ? token : "";
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// multipart/form-data
const Instance_multi = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
});

Instance_multi.interceptors.request.use(
    (config) => {
        ip = store.getState().ipInfo.ipInfo;
        token = store.getState().userInfo.userToken;

        config.headers["Jobara-Src"] = ip ? ip : "";
        config.headers["Jobara-Token"] = token ? token : "";
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export { Instance, Instance_multi };
