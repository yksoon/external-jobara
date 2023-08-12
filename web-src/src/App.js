import React, { useEffect } from "react";
import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";
import axios from "axios";
import Router from "Router";
import { useDispatch, useSelector } from "react-redux";
import { CommonRest, CommonSpinner } from "common/js/Common";
import {
    set_codes,
    set_result_code,
    set_country_bank,
} from "redux/actions/codesAction";
import { set_ip_info } from "redux/actions/ipInfoAction";
import { useLocation, useNavigate } from "react-router";
import { ConfirmContextProvider } from "context/ContextProvider";
import { AlertContextProvider } from "context/ContextProvider";
import ConfirmModal from "common/js/commonNoti/ConfirmModal";
import AlertModal from "common/js/commonNoti/AlertModal";
import useAlert from "hook/useAlert";
import {
    set_check_schedule,
    set_schedule,
    set_view_schedule,
} from "redux/actions/scheduleAction";
import { init_user_info } from "redux/actions/userInfoAction";

function App() {
    let ipInfo = useSelector((state) => state.ipInfo.ipInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const userToken = useSelector((state) => state.userInfo.userToken);

    useEffect(() => {
        // localStorage.clear();

        const ipCallback = (ip) => {
            if (ip) {
                dispatch(set_ip_info(ip));
            }
        };
        if (!ipInfo) {
            getIpInfo(ipCallback);
        }

        getResultCode();
        getCodes();
        getCountryBank();
        getSchedule();
        setInterval(getResultCode, 3600000);
        setInterval(getCodes, 3600000);

        // localStorage.clear();
    }, []);

    // 사전등록 페이지 벗어날 시 로그아웃처리
    useEffect(() => {
        const pathname = location.pathname;

        if (pathname !== "/signup_mod" && userToken !== null) {
            RestServer("post", apiPath.api_auth_signout, {})
                .then((response) => {
                    if (response.data.result_info === true) {
                        dispatch(init_user_info(null));
                    } else {
                        dispatch(init_user_info(null));
                    }
                })
                .catch((error) => {
                    // 오류발생시 실행
                    console.log(decodeURI(error));
                    dispatch(init_user_info(null));
                });
        }
    }, [location]);

    // Spinner
    let spinnerOption = useSelector((state) => state.common.spinner);

    // IP
    const getIpInfo = async (callback) => {
        let ip;

        await axios
            .get("https://geolocation-db.com/json/")
            .then((res) => {
                ip = res.data.IPv4;
                callback(ip);
                // dispatch(set_ip_info(ip));
            })
            .catch((error) => {
                ip = "";
                callback(ip);
                // dispatch(set_ip_info(ip));
            });
    };

    // result code
    const getResultCode = () => {
        RestServer("get", apiPath.api_result, {})
            .then((response) => {
                console.log("result_code", response);

                dispatch(
                    set_result_code(JSON.stringify(response.data.result_info))
                );
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
                console.log("codes", response);

                dispatch(set_codes(JSON.stringify(response.data.result_info)));
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
                console.log("codesCountryBank", response);

                dispatch(
                    set_country_bank(JSON.stringify(response.data.result_info))
                );
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
                console.log("scheduleList", response);

                const resultData = response.data.result_info;

                // 화면단
                const viewSchedule = resultData.filter(
                    (e) => e.schedule_type_cd === "900"
                )[0];

                // 날짜 체크
                const checkSchedule = resultData.filter(
                    (e) => e.schedule_type_cd === "000"
                )[0];

                dispatch(set_view_schedule(JSON.stringify(viewSchedule)));

                dispatch(set_check_schedule(JSON.stringify(checkSchedule)));
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    return (
        <>
            <div className="wrapper">
                <CommonSpinner option={spinnerOption} />

                <ConfirmContextProvider>
                    <AlertContextProvider>
                        <Router />
                        <AlertModal />
                        <ConfirmModal />
                    </AlertContextProvider>
                </ConfirmContextProvider>
            </div>
        </>
    );
}

export default App;
