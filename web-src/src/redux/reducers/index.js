import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import codes from "./reducers/codes";
import userInfo from "./reducers/userInfo";
import ipInfo from "./reducers/ipInfo";
import common from "./reducers/common";
import page from "./reducers/page";
import schedule from "./reducers/schedule";
import userInfoAdmin from "./reducers/userInfoAdmin";

// 스토리지 세팅
const persistConfig = {
    key: "root",
    storage: storageSession,
    version: 0,
    whitelist: ["codes", "userInfo", "ipInfo", "page", "userInfoAdmin"], // 이곳에 추가시 세션스토리지에 저장됨
};

// 리듀서 추가
const rootReducer = combineReducers({
    codes,
    userInfo,
    ipInfo,
    common,
    page,
    schedule,
    userInfoAdmin,
});

export default persistReducer(persistConfig, rootReducer);
