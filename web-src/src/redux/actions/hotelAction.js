// Actions
export const SET_REG_HOTEL = "SET_REG_HOTEL";
export const INIT_REG_HOTEL = "INIT_REG_HOTEL";

// Action Creator
export const set_reg_hotel = (data) => {
    return {
        type: SET_REG_HOTEL,
        payload: data,
    };
};

export const init_reg_hotel = (data) => {
    return {
        type: INIT_REG_HOTEL,
        payload: data,
    };
};
