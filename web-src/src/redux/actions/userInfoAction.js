// Actions
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const INIT_USER_INFO = "INIT_USER_INFO";

// userInfo SET
export const set_user_info = (data) => {
    return {
        type: SET_USER_INFO,
        payload: data,
    };
};

// userToken SET
export const set_user_token = (data) => {
    return {
        type: SET_USER_TOKEN,
        payload: data,
    };
};

// userInfo 초기화
export const init_user_info = (data) => {
    return {
        type: INIT_USER_INFO,
        payload: data,
    };
};
