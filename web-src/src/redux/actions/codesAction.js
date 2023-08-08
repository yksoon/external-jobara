// Actions
export const SET_CODES = "SET_CODES";
export const SET_RESULT_CODE = "SET_RESULT_CODE";

// Action Creator
export const set_codes = (data) => {
    return {
        type: SET_CODES,
        payload: data,
    };
};

export const set_result_code = (data) => {
    return {
        type: SET_RESULT_CODE,
        payload: data,
    };
};
