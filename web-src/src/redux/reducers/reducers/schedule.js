import {
    SET_VIEW_SCHEDULE,
    SET_CHECK_SCHEDULE,
} from "redux/actions/scheduleAction";

// 초기값 설정
const initialState = {
    viewSchedule: {},
    checkSchedule: {},
};

// codes Reducer
export default function schedule(state = initialState, action) {
    switch (action.type) {
        case SET_VIEW_SCHEDULE:
            return {
                ...state,
                viewSchedule: JSON.parse(action.payload),
            };

        case SET_CHECK_SCHEDULE:
            return {
                ...state,
                checkSchedule: JSON.parse(action.payload),
            };

        default:
            return state;
    }
}
