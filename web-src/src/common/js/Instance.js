import axios from "axios";
import store from "redux/store/store";

let ip;
let token;

// application/json
const Instance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

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
