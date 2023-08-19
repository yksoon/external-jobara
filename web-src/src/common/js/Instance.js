import axios from "axios";
import store from "redux/store/store";

let ip;
let token;

/*
    REST CONNECTION 시 Request 를 가로채서
    request.headers 를 셋팅한다.
    
    Jobara-Src = : 0.0.0.0
    Jobara-Token = JEJUJOBARA xxxxxxxxxxxxxxx

*/

// application/json
const Instance = axios.create({
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "text/plain",
    },
    timeout: 5000,
});

Instance.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptors(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// application/json
const Instance_blob = axios.create({
    headers: {
        "Content-Type": "application/json",
        "respons-type": "blob",
    },
    timeout: 5000,
});

Instance_blob.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptors(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// application/json
// admin
const Instance_admin = axios.create({
    headers: {
        "Content-Type": "application/json",
        // "Content-Type":
        //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8",
    },
    timeout: 10000,
});

Instance_admin.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptorsAdmin(config);
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
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";

        setInterceptors(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// multipart/form-data
// admin
const Instance_admin_multi = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
    },
    timeout: 10000,
});

Instance_admin_multi.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptorsAdmin(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// multipart/form-data
// admin
const Instance_admin_blob = axios.create({
    headers: {
        "Content-Type": "application/json",
        "respons-type": "blob",
    },
    timeout: 10000,
});
Instance_admin_blob.interceptors.request.use(
    (config) => {
        // ip = store.getState().ipInfo.ipInfo;
        // token = store.getState().userInfo.userToken;

        // config.headers["Jobara-Src"] = ip ? ip : "";
        // config.headers["Jobara-Token"] = token ? token : "";
        setInterceptorsAdmin(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

const setInterceptors = (config) => {
    ip = store.getState().ipInfo.ipInfo;
    token = store.getState().userInfo.userToken;

    config.headers["Jobara-Src"] = ip ? ip : "";
    config.headers["Jobara-Token"] = token ? token : "";

    return config;
};

const setInterceptorsAdmin = (config) => {
    ip = store.getState().ipInfo.ipInfo;
    token = store.getState().userInfoAdmin.userTokenAdmin;

    config.headers["Jobara-Src"] = ip ? ip : "";
    config.headers["Jobara-Token"] = token ? token : "";

    return config;
};

export {
    Instance,
    Instance_multi,
    Instance_blob,
    Instance_admin,
    Instance_admin_multi,
    Instance_admin_blob,
};
