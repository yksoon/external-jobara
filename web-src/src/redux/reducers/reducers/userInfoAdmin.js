import {
    SET_USER_INFO_ADMIN,
    INIT_USER_INFO_ADMIN,
    SET_USER_TOKEN_ADMIN,
} from "redux/actions/userInfoAdminAction";

// 초기값 설정
const initialState = {
    userInfoAdmin: null,
    userTokenAdmin: null,
};

// user_info Reducer
export default function userInfoAdmin(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO_ADMIN:
            return {
                ...state,
                userInfoAdmin: JSON.parse(action.payload),
            };

        case SET_USER_TOKEN_ADMIN:
            return {
                ...state,
                userTokenAdmin: JSON.parse(action.payload).token,
            };

        case INIT_USER_INFO_ADMIN:
            return {
                userInfoAdmin: null,
                userTokenAdmin: null,
            };

        default:
            return state;
    }
}
