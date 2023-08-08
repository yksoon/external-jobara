import { SET_CODES, SET_RESULT_CODE } from "redux/actions/codesAction";

// 초기값 설정
const initialState = {
    codes: [],
    resultCode: [],
};

// codes Reducer
export default function codes(state = initialState, action) {
    switch (action.type) {
        case SET_CODES:
            return {
                ...state,
                codes: JSON.parse(action.payload),
            };

        case SET_RESULT_CODE:
            return {
                ...state,
                resultCode: JSON.parse(action.payload),
            };

        default:
            return state;
    }
}
