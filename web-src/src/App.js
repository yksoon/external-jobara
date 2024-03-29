import React, { useEffect } from "react";
import { apiPath } from "webPath";
import { RestServer } from "common/js/Rest";
import axios from "axios";
import Router from "Router";
import { useLocation, useNavigate } from "react-router";
import { ConfirmContextProvider } from "context/ContextProvider";
import { AlertContextProvider } from "context/ContextProvider";
import ConfirmModal from "common/js/commonNoti/ConfirmModal";
import AlertModal from "common/js/commonNoti/AlertModal";
import {
    useRecoilState,
    useRecoilValue,
    useResetRecoilState,
    useSetRecoilState,
} from "recoil";
import {
    checkScheduleAtom,
    codesAtom,
    countryBankAtom,
    ipInfoAtom,
    resultCodeAtom,
    userInfoAtom,
    userTokenAtom,
    viewScheduleAtom,
} from "recoils/atoms";

function App() {
    // let ipInfo = useSelector((state) => state.ipInfo.ipInfo);
    const [ipInfo, setIpInfo] = useRecoilState(ipInfoAtom);

    // const ipInfo = useRecoilValue(ipInfoAtom);
    // const setIpInfo = useSetRecoilState(ipInfoAtom);

    const navigate = useNavigate();
    const location = useLocation();

    const resetUserInfo = useResetRecoilState(userInfoAtom);
    const resetUserToken = useResetRecoilState(userTokenAtom);

    const userToken = useRecoilValue(userTokenAtom);
    // const userToken = useSelector((state) => state.userInfo.userToken);
    // const userInfo = useSelector((state) => state.userInfo.userInfo);

    const setResultCode = useSetRecoilState(resultCodeAtom);
    const setCodes = useSetRecoilState(codesAtom);
    const setCountryBank = useSetRecoilState(countryBankAtom);
    const setViewSchedule = useSetRecoilState(viewScheduleAtom);
    const setCheckSchedule = useSetRecoilState(checkScheduleAtom);

    useEffect(() => {
        if (ipInfo === "") {
            getIpInfo();
        } else {
            getResultCode();
            getCodes();
            getCountryBank();
            getSchedule();
            setInterval(getResultCode, 3600000);
            setInterval(getCodes, 3600000);
        }
    }, []);

    // 사전등록 페이지 벗어날 시 로그아웃처리
    useEffect(() => {
        const pathname = location.pathname;

        if (pathname !== "/signup_mod" && userToken === " ") {
            RestServer("post", apiPath.api_auth_signout, {})
                .then((response) => {
                    if (response.data.result_info === true) {
                        // dispatch(init_user_info(null));
                        resetUserInfo();
                        resetUserToken();
                    } else {
                        // dispatch(init_user_info(null));
                        resetUserInfo();
                        resetUserToken();
                    }
                })
                .catch((error) => {
                    // 오류발생시 실행
                    // console.log(decodeURI(error));
                    // dispatch(init_user_info(null));
                    resetUserInfo();
                    resetUserToken();
                });
        }
    }, [location]);

    // Spinner
    // const spinnerOption = useSelector((state) => state.common.spinner);

    // IP
    const getIpInfo = async () => {
        let ip;

        await axios
            .get("https://geolocation-db.com/json/")
            .then((res) => {
                ip = res.data.IPv4;
                setIpInfo(ip);
                sessionStorage.setItem("ipInfo", ip);

                // console.log("@@@@@@@@@@@", ip);
                getResultCode();
                getCodes();
                getCountryBank();
                getSchedule();
                setInterval(getResultCode, 3600000);
                setInterval(getCodes, 3600000);

                // callback(ip);
                // dispatch(set_ip_info(ip));
            })
            .catch((error) => {
                ip = "";
                setIpInfo(ip);
                sessionStorage.setItem("ipInfo", ip);
                // callback(ip);
                // dispatch(set_ip_info(ip));
            });

        return ip;
    };

    // result code
    const getResultCode = () => {
        RestServer("get", apiPath.api_result, {})
            .then((response) => {
                // console.log("result_code", response);

                setResultCode(response.data.result_info);
                // dispatch(
                //     set_result_code(JSON.stringify(response.data.result_info))
                // );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    // codes
    const getCodes = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: [],
            exclude_code_types: [
                "INTER_PHONE_TYPE",
                "BANK_TYPE",
                "LANGUAGE_TYPE",
            ],
        })
            .then((response) => {
                // console.log("codes", response);

                // dispatch(set_codes(JSON.stringify(response.data.result_info)));
                setCodes(response.data.result_info);
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    // codes
    const getCountryBank = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: ["INTER_PHONE_TYPE", "BANK_TYPE", "LANGUAGE_TYPE"],
            exclude_code_types: [],
        })
            .then((response) => {
                // console.log("codesCountryBank", response);

                // dispatch(
                //     set_country_bank(JSON.stringify(response.data.result_info))
                // );

                setCountryBank(response.data.result_info);
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    // schedule
    const getSchedule = () => {
        RestServer("get", apiPath.api_schedule_list, {})
            .then((response) => {
                // console.log("scheduleList", response);

                const resultData = response.data.result_info;

                // 화면단
                const viewSchedule = resultData.filter(
                    (e) => e.schedule_type_cd === "900"
                )[0];

                // 날짜 체크
                const checkSchedule = resultData.filter(
                    (e) => e.schedule_type_cd === "000"
                )[0];

                // dispatch(set_view_schedule(JSON.stringify(viewSchedule)));
                // dispatch(set_check_schedule(JSON.stringify(checkSchedule)));

                setViewSchedule(viewSchedule);
                setCheckSchedule(checkSchedule);
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    return (
        <>
            <div className="wrapper">
                <ConfirmContextProvider>
                    <AlertContextProvider>
                        <Router />
                        <AlertModal />
                        <ConfirmModal />
                    </AlertContextProvider>
                </ConfirmContextProvider>
                {/* {isSpinner && <CommonSpinner />} */}
            </div>
            {/* <div>{spinnerOption.isLoading && <CommonSpinner />}</div> */}
        </>
    );
}

export default App;
