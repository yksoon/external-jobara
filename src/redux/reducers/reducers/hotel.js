import { INIT_REG_HOTEL, SET_REG_HOTEL } from "redux/actions/hotelAction";

// 초기값 설정
const initialState = {
    essential: {
        nationType: "",
        addr1Ko: "",
        addr2Ko: "",
        addr1En: "",
        addr2En: "",
        latitude: "",
        longitude: "",
        nameKo: "",
        nameEn: "",
        zipcode: "",
    },
};

// codes Reducer
export default function hotel(state = initialState, action) {
    switch (action.type) {
        case SET_REG_HOTEL:
            return {
                ...state,
                essential: action.payload,
            };

        case INIT_REG_HOTEL:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}
