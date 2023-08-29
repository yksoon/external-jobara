import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "sessionStorage", //원하는 key 값 입력
    storage: sessionStorage,
});

// 스피너
export const isSpinnerAtom = atom({
    key: "isSpinner",
    default: false,
});

// 관리자 페이지
export const pageAtom = atom({
    key: "page",
    default: "dashboard",
    effects_UNSTABLE: [persistAtom],
});
