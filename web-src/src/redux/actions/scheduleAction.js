// Actions
export const SET_VIEW_SCHEDULE = "SET_VIEW_SCHEDULE";
export const SET_CHECK_SCHEDULE = "SET_CHECK_SCHEDULE";

// Action Creator
export const set_view_schedule = (data) => {
    return {
        type: SET_VIEW_SCHEDULE,
        payload: data,
    };
};

export const set_check_schedule = (data) => {
    return {
        type: SET_CHECK_SCHEDULE,
        payload: data,
    };
};
