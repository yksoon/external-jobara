// Actions
export const SET_USER_INFO_ADMIN = "SET_USER_INFO_ADMIN";
export const SET_USER_TOKEN_ADMIN = "SET_USER_TOKEN_ADMIN";
export const INIT_USER_INFO_ADMIN = "INIT_USER_INFO_ADMIN";

// userInfo SET
export const set_user_info_admin = (data) => {
    return {
        type: SET_USER_INFO_ADMIN,
        payload: data,
    };
};

// userToken SET
export const set_user_token_admin = (data) => {
    return {
        type: SET_USER_TOKEN_ADMIN,
        payload: data,
    };
};

// userInfo 초기화
export const init_user_info_admin = (data) => {
    return {
        type: INIT_USER_INFO_ADMIN,
        payload: data,
    };
};
